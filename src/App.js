import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
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
				<CardList>
					{this.state.family.map((p) => (
						<h1 id={p.id}>{p.name}</h1>
					))}
				</CardList>
			</div>
		)
	}
}

export default App
