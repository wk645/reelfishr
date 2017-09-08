import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {

	return (
		<div>
			{props.searchTerm === "" ? null : <Movie movies={props.movies} />}
		</div>
	)
}

export default MoviesList

		// {props.searchTerm === "" ? null : props.similarMovies.map((movie, index) => <Movie key={index} movie={movie} />)}