import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Topic from './Topic'

class BasicExample extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
			</div>
		)
	}
}

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	)
}
function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	)
}

function Topics({ match }) {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>
			<Route path={`${match.path}/:topicId`} component={Topic} />
			<Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
			{/* 参数只能是asc和desc */}
			{/* <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} /> */}
		</div>
	)
}

/* function Topic({ match }) {
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	)
}
 */
export default BasicExample
