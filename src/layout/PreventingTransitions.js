import React, { Component } from 'react'
import { Route, Link, Prompt, Switch } from 'react-router-dom'
export default class PreventingTransitions extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Form</Link>
					</li>
					<li>
						<Link to="/one">One</Link>
					</li>
					<li>
						<Link to="/asdasdasdas">no match</Link>
					</li>
				</ul>
				<hr />
                {/* Switch渲染第一个匹配成功的路由， 没有path属性的Route总是会匹配， path是 '/' 最好加exact */}
				<Switch>
					<Route path="/" exact component={Form} />
					<Route path="/one" render={() => <h2>One</h2>} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		)
	}
}

function NoMatch({ location }) {
	return (
		<div>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	)
}

class Form extends Component {
	state = {
		isBlocking: false
	}
	render() {
		let { isBlocking } = this.state
		return (
			<div class="form">
				<Prompt when={isBlocking} message={location => `go to ${location.pathname} ?`} />
				<button onClick={this.handleClick}>toggle{isBlocking.toString()}</button>
			</div>
		)
	}
	handleClick = () => {
		this.setState({
			isBlocking: !this.state.isBlocking
		})
	}
}
