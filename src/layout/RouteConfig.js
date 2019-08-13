import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

function Sandwiches() {
	return <h2>SandWiches</h2>
}

function Tacos({ routes }) {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/tacos/bus">Bus</Link>
				</li>
				<li>
					<Link to="/tacos/cart">Cart</Link>
				</li>
			</ul>
			{routes.map((route, index) => (
				<RouteWithSubRoutes key={index} {...route} />
			))}
		</div>
	)
}

function Bus() {
	return <h3>Bus</h3>
}

function Cart() {
	return <h3>Cart</h3>
}

const routes = [
	{
		path: '/sandwiches',
		component: Sandwiches
	},
	{
		path: '/tacos',
		component: Tacos,
		routes: [
			{
				path: '/tacos/bus',
				component: Bus
			},
			{
				path: '/tacos/cart',
				component: Cart
			}
		]
	}
]

function RouteWithSubRoutes(route) {
	return <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
}

export default class RouteConfig extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/tacos">Tacos</Link>
					</li>
					<li>
						<Link to="/sandwiches">Sandwiches</Link>
					</li>
				</ul>

				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</div>
		)
	}
}
