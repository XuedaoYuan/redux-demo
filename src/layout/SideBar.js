import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const routes = [
	{
		path: '/',
		exact: true,
		sideBar: () => <div>home</div>,
		main: () => <div>home!</div>
	},
	{
		path: '/about',
		sideBar: () => <div>about</div>,
		main: () => <div>about!</div>
	},
	{
		path: '/setting',
		sideBar: () => <div>setting</div>,
		main: () => <div>setting!</div>
	}
]

export default class SideBar extends Component {
	render() {
		return (
			<div style={{ display: 'flex' }}>
				<div
					style={{
						width: '40%',
						background: 'green'
					}}
				>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/setting">Setting</Link>
						</li>
					</ul>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} exact={route.exact} component={route.sideBar} />
					))}
				</div>
				<div>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} exact={route.exact} component={route.main} />
					))}
				</div>
			</div>
		)
	}
}
