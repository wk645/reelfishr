import React from 'react'
import Movie from './Movie'
import Clickable from './hocs/Clickable'

import { Card } from 'semantic-ui-react'


const ResultsContainer = (props) => {

	let movies = props.movies.map((movie, index) => {
		const MovieWithClick = Clickable(Movie)
		return <MovieWithClick className="clickable" key={index} history={props.history} movie={movie} handleClick={props.handleClick} />})

	return (
		<div>
			<center>
				<br />
				<br />
			<div>
				
				{props.movies.length === 0 ? null : <Card.Group className="displayGrid">{movies}</Card.Group> }
				
			</div>
			</center>
			

		</div>
	)

}

export default ResultsContainer

// <Route exact path=`/search/:id/${props.setting}` render={() => <MoviesContainer movies={props.movies} searchTerm={props.searchTerm} results={props.results} handleClick={props.handleClick} setting={props.setting}/> } />
