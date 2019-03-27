import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne, addMore } from '../redux/actions'
class Hello extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nums: [1, 2, 3, 4, 5]
		}
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		const { handleAddOne } = this.props
		const { nums } = this.state
		return (
			<div>
				<p>Hello, {this.props.count}</p>
				<button onClick={this.handleClick}>click test</button>
				<button onClick={handleAddOne}>add one</button>
				<ul>
					{nums.map(num => (
						<li key={num.toString()}>{num}</li>
					))}
				</ul>
			</div>
		)
	}
	handleClick() {
		console.log('click')
		this.props.handleAddMore({ n: Math.ceil(Math.random() * 10) })
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
		handleAddMore: payload => dispatch(addMore(payload))
	}
}

export default connect(
	mapStateToProps,
	mapDispathToProps
)(Hello)
