import React from 'react'

import MoviesList from './MoviesList'
// import {moviesData} from '../Dummy'


const MoviesContainer = (props) => {
	// console.log(props.movies)

	return (
			<MoviesList movies={props.movies} searchTerm={props.searchTerm} similarMovies={props.similarMovies} />
	)
}

export default MoviesContainer