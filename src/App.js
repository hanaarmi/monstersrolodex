import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

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
		const { monsters, searchField } = this.state
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		)
		return (
			<div className="App">
				<SearchBox
					placeholder="search monsters"
					handleChange={(e) => {
						// to use this.setState function, argument should be javascript object {}
						this.setState({ searchField: e.target.value }, () =>
							console.log(this.state.searchField)
						)
					}}
				/>
				<CardList monsters={filteredMonster}></CardList>
			</div>
		)
	}
}

export default App
