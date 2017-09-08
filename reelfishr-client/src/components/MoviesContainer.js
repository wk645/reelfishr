import React from 'react'
import Search from './Search'
import MoviesList from './MoviesList'
// import {moviesData} from '../Dummy'

export default class MoviesContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			movies: [],
			similarMovies: [],
			targetMovie: "",
			searchTerm: "",
			setting: "similar"
		}
	}

	// shouldComponentUpdate() {
	// 	// t or false
	// 	this.fetchMovie()
	// 	this.fetchSimilarMovie()
	// }

	// fetchMovie = (userInput) => {
	// 	fetch("https://api.themoviedb.org/3/movie/550?api_key=2b11df788b627a6cd7c12d0399f6d17f").then(res => res.json()).then(data => this.setState({ movies: data }))
	// }

	// /movie/{movie_id}/recommendations

	fetchMovies = (movie) => {
		fetch(`https://api.themoviedb.org/3/movie/${movie}/${this.state.setting}?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ similarMovies: data.results }))
	}

	handleSearch = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	handleSelect = (event) => {
		this.setState({ setting: event.target.value })
	}

	render() {
		return (
			<div>
				<Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} fetchCB={this.fetchMovies} handleSelect={this.handleSelect} />
				<MoviesList movies={this.state.movies} searchTerm={this.state.searchTerm} similarMovies={this.state.similarMovies} />
			</div>
		)
	}
}