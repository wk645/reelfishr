import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


const MoviesContainer = (props) => {

	return (
		<div>
		<br />
		<br />
			<center>
				<h2>{props.setting.toUpperCase()}</h2>
				<Card.Group className="displayGrid">
			{props.results.length === 0 ? null : props.results.map((movie, index) => 
				<Movie key={index}
				movie={movie} handleClick={props.handleClick} />)} 
				</Card.Group>
			</center>
  		</div>
	)


}

export default MoviesContainer

// without <Card.Group>, all cards 1 on each row