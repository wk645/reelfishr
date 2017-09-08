import React from 'react'
// import Search from 'search'
import MoviesContainer from './MoviesContainer'

const ResultsContainer = (props) => {

	// const handleSelect = (event) => {
	// 	props.updateSetting(event.target.value)
	// }

	return (
		<div>
			<MoviesContainer movies={props.movies} searchTerm={props.searchTerm} similarMovies={props.similarMovies}/>
		</div>
	)
	
}

export default ResultsContainer



// onSubmit => results container => display all movies that match the result (array) => for that movie onClick => similar / recommendations