import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchField: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }))
	}

	render() {
		return (
			<div className="App">
				<input
					type="search"
					placeholder="search monsters"
					onChange={(e) => {
						// to use this.setState function, argument should be javascript object {}
						this.setState({ searchField: e.target.value }, () =>
							console.log(this.state.searchField)
						)
					}}
				/>
				<CardList monsters={this.state.monsters}></CardList>
			</div>
		)
	}
}

export default App
