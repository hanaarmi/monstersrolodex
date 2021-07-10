import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			family: [],
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ family: users }))
	}

	render() {
		return (
			<div className="App">
				{this.state.family.map((p) => (
					<h1 id={p.id}>{p.name}</h1>
				))}
			</div>
		)
	}
}

export default App
