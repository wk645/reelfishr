import React from 'react'
// import Search from 'search'
import MoviesContainer from './MoviesContainer'
import { Dropdown } from 'semantic-ui-react'

const ResultsContainer = (props) => {

	// const handleSelect = (event) => {
	// 	props.updateSetting(event.target.value)
	// }
	const select = (event) => {
		props.handleSelect(event.target.value)
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

	return (
		<div>
			<center><h3>Choose the Correct Movie</h3>
			<Dropdown placeholder="Select an Option" selection options={options} onChange={select} /></center>
				<br />
				<br />
				<MoviesContainer movies={props.movies} searchTerm={props.searchTerm} similarMovies={props.similarMovies}/>
		</div>
	)
	
}

export default ResultsContainer



// onSubmit => results container => display all movies that match the result (array) => for that movie onClick => similar / recommendations