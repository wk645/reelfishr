import React from 'react'
import Search from './Search'
import MoviesList from './MoviesList'
import {moviesData} from '../Dummy'

export default class MoviesContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			movies: moviesData,
			searchTerm: ""
		}
	}

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	render() {
		return (
			<div>
				<Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
				<MoviesList movies={this.state.movies} searchTerm={this.state.searchTerm} />
			</div>
		)
	}
}