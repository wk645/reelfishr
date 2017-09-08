import React from 'react'

import MoviesList from './MoviesList'
// import {moviesData} from '../Dummy'

const MoviesContainer = (props) => {

	return (
		<div>
			<MoviesList movies={props.movies} searchTerm={props.searchTerm} similarMovies={props.similarMovies} />
		</div>
	)
}

export default MoviesContainer
	// constructor() {
	// 	super()

	// 	this.state = {
	// 		movies: [],
	// 		similarMovies: [],
	// 		targetMovie: "",
	// 		searchTerm: "",
	// 		setting: "similar"
	// 	}
	// }

	// shouldComponentUpdate() {
	// 	// t or false
	// 	this.fetchMovie()
	// 	this.fetchSimilarMovie()
	// }

	// fetchMovie = (userInput) => {
	// 	fetch("https://api.themoviedb.org/3/movie/550?api_key=2b11df788b627a6cd7c12d0399f6d17f").then(res => res.json()).then(data => this.setState({ movies: data }))
	// }

	// /movie/{movie_id}/recommendations

	// fetchMovies = (movie) => {
	// 	fetch(`https://api.themoviedb.org/3/movie/${movie}/${this.state.setting}?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ similarMovies: data.results }))
	// }

	// handleSearch = (event) => {
	// 	this.setState({ searchTerm: event.target.value })
	// }

	// handleSelect = (event) => {
	// 	this.setState({ setting: event.target.value })
	// }
