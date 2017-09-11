import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


const MoviesContainer = (props) => {
	// console.log(props.movies)

	return (
		<div>
		<br />
		<br />
			<center>
				<Card.Group>
			{props.results.length === 0 ? null : props.results.map((movie, index) => <Movie key={index} 
				movie={movie} />)}
				</Card.Group>
			</center>
		</div>
	)
}

export default MoviesContainer