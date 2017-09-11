import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


const MoviesContainer = (props) => {


	return (
		<div>
		<br />
		<br />

			<center>
				<h3>{props.setting}</h3>
				<Card.Group>
			{props.results.length === 0 ? null : props.results.map((movie, index) => <Movie key={index}
				movie={movie} />)}
				</Card.Group>
			</center>
  		</div>
	)
}

export default MoviesContainer
