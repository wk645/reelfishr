import React from 'react'
import Movie from './Movie'
import MoviesContainer from './MoviesContainer'
import { Dropdown, Card } from 'semantic-ui-react'

const ResultsContainer = (props) => {
	// const handleSelect = (event) => {
	// 	props.updateSetting(event.target.value)
	// }
	const select = (event, data) => {
		// console.log("rec", data)
		props.handleSelect(data.value)
	}

	const options = [
	  
	  {
	    text: 'Get Similar Movies',
	    value: 'similar'
	  },

	  {
	    text: 'Get Recommendations',
	    value: 'recommendations'
	  }

	]

	let movies = props.movies.map((movie, index) => <Movie key={index} movie={movie} handleClick={props.handleClick} />)
	
	return (
		<div>
			<center><h3>Choose the Correct Movie</h3>
			<Dropdown placeholder="Select an Option" selection options={options} onChange={select} />
				<br />
				<br />
			<div>
				{props.movies.length === 0 ? null : <Card.Group>{movies}</Card.Group> }
			</div></center>
			<MoviesContainer movies={props.movies} searchTerm={props.searchTerm} results={props.results} handleClick={props.handleClick} />
		</div>
	)
	
}

export default ResultsContainer



// onSubmit => results container => display all movies that match the result (array) => for that movie onClick => similar / recommendations