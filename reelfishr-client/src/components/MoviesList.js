import React from 'react'
import Movie from './Movie'
// import {Grid} from 'semantic-ui-react'

const MoviesList = (props) => {

	return (
		<div><center>
			{props.searchTerm === "" ? null : <Movie movies={props.movies} />}
		</center></div>
	)
}

export default MoviesList

		// {props.searchTerm === "" ? null : props.similarMovies.map((movie, index) => <Movie key={index} movie={movie} />)}