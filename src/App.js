import React, { Component } from 'react'
import Hello from './components/Hello'
// import BasicExample from './layout/BasicExample'
// import PreventingTransitions from './layout/PreventingTransitions'
import SideBar from './layout/SideBar'
import RouteConfig from './layout/RouteConfig'
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>App</h1>
				<Hello />
				{/* <PreventingTransitions /> */}
				{/* <BasicExample /> */}
				{/* <SideBar /> */}
				{/* <RouteConfig /> */}
			</div>
		)
	}
}

export default App
