import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import ResultsContainer from './components/ResultsContainer'
import Search from './components/Search'

class App extends Component {

  constructor() {
  	super()

  	this.state = {
		movies: [],
		similarMovies: [],
		targetMovie: "",
		searchTerm: "",
		setting: "similar"
  	}
  }

	// fetchMovies = (movie) => {
	// 	fetch(`https://api.themoviedb.org/3/movie/${movie}/${this.state.setting}?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ similarMovies: data.results }))
	// }

	fetchMovies = (movie) => {
	let movieUrl = movie.replace(/\s/, '+')

		fetch(`http://localhost:3000/api/v1/movie/${movieUrl}`)
		.then(res => res.json())
		.then(movie => this.setState({
			movies: movie
		})
		)
	}

	handleChange = (value) => {
		this.setState({ searchTerm: value })
	}

	handleSelect = (value) => {
		this.setState({ setting: value })
	}

  render() {
  	console.log(this.state.searchTerm)
  	console.log(this.state.movies)
    return (
      <div>
        <Home />
        <Search searchTerm={this.state.searchTerm} fetchMovies={this.fetchMovies} handleSelect={this.handleSelect} handleChange={this.handleChange} />
        <ResultsContainer setting={this.state.setting} movies={this.state.movies} searchTerm={this.state.searchTerm} similarMovies={this.state.similarMovies}/>
      </div>
    );
  }
}

export default App;
