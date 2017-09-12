import React from 'react'
import Movie from './Movie'
import { Card } from 'semantic-ui-react'


const MoviesContainer = (props) => {
console.log("Setting", props.setting, "Results", props.results)

	return (
		<div>
		<br />
		<br />
			<center>
				<h2>{props.setting}</h2>
				<Card.Group>
			{props.results.length === 0 ? null : props.results.map((movie, index) => 
				<Movie key={index}
				movie={movie} handleClick={props.handleClick} />)} 
				</Card.Group>
			</center>
  		</div>
	)


}

export default MoviesContainer

// <Route path='/search/:movie_id/recommendation' render={() => } />
// <Route path='/search/:movie_id/similar' render={() => } />
