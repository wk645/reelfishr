import React from 'react'
import Movie from './Movie'
// import {Grid} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

const MoviesList = (props) => {
	let movies = props.movies.map((movie, index) => <Movie key={index} movies={movie} />)
	return (
		<div><center>
			{props.movies.length === 0 ? null : <Card.Group>{movies}</Card.Group> }
		</center></div>
	)
}

export default MoviesList