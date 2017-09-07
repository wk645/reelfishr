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
			searchTerm: ""
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

	fetchSimilarMovie = (movie) => {
		fetch(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ similarMovies: data.results }))
	}

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	render() {
		return (
			<div>
				<Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} fetchCB={this.fetchSimilarMovie} />
				<MoviesList movies={this.state.movies} searchTerm={this.state.searchTerm} similarMovies={this.state.similarMovies} />
			</div>
		)
	}
}