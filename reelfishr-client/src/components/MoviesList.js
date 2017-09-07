import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {

	// console.log(props.movies)
	let filter = props.movies.filter(movie => movie.original_title.toLowerCase().includes(props.searchTerm.toLowerCase()))

	return (
		<div>
			{props.searchTerm === "" ? null : filter.map((movie, index) => <Movie key={index} movie={movie} />)}
		</div>
	)
}

export default MoviesList