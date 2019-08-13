import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne, addMore, addAsync } from '../redux/actions'
class Hello extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nums: [1, 2, 3, 4, 5],
			name: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleClickAddAsync = this.handleClickAddAsync.bind(this)
	}
	render() {
		const { handleAddOne } = this.props
		const { nums } = this.state
		return (
			<div>
				<p>Hello, {this.props.count}</p>
				<button onClick={this.handleClick}>add more</button>
				<button onClick={handleAddOne}>add one</button>
				<button onClick={this.handleClickAddAsync}>add 10 async</button>
				{/* <ul>
					{nums.map(num => (
						<li key={num.toString()}>{num}</li>
					))}
				</ul>
				<label>
					name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
				</label> */}
			</div>
		)
	}
	handleClick() {
		console.log('click')
		this.props.handleAddMore({ n: Math.ceil(Math.random() * 10) })
	}
	handleClickAddAsync() {
		this.props.handleAddAsync()
	}
	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}
	componentDidMount() {
		console.log('did mount')
	}
}
function mapStateToProps(state) {
	return {
		count: state.Count.count
	}
}

function mapDispathToProps(dispatch) {
	return {
		handleAddOne: () => dispatch(addOne),
		handleAddMore: payload => dispatch(addMore(payload)),
		handleAddAsync: () => dispatch(addAsync())
	}
}

export default connect(
	mapStateToProps,
	mapDispathToProps
)(Hello)

// export default Hello;
