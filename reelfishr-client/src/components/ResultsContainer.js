import React from 'react'
// import Search from 'search'
import MoviesContainer from './MoviesContainer'

export default class ResultsContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			movies: props.movies
		}
	}

	handleSelect = (event) => {
		this.props.updateSetting(event.target.value)
	}

	render() {
		return (
			<div>
				<MoviesContainer movies={this.state.movies} searchTerm={this.state.searchTerm} similarMovies={this.props.similarMovies}/>
			</div>
		)
	}


}

// onSubmit => results container => display all movies that match the result (array) => for that movie onClick => similar / recommendations