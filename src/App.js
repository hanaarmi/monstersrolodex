import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			string: 'Hello, Jungkon Kim',
			family: [
				{
					name: 'Suho',
					id: 'p1',
				},
				{
					name: 'Sua',
					id: 'p2',
				},
				{
					name: 'Hyunju',
					id: 'p3',
				},
				{
					name: 'Jungkon',
					id: 'p4',
				},
			],
		}
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
