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
		results: [],
		targetMovie: "",
		searchTerm: "",
		setting: "similar"
  	}
  }

	fetchFromAPI = (movie_id) => {
		console.log(this.state.setting)
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/${this.state.setting}?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ results: data.results }))
	}

	fetchMovies = (movie) => {
	let movieUrl = movie.replace(/\s/, '+')

		fetch(`http://localhost:3000/api/v1/movie/${movieUrl}`)
		.then(res => res.json())
		.then(movies => this.setState({ movies: movies }))
	}

	handleChange = (value) => {
		this.setState({ searchTerm: value })
	}

	handleSelect = (value) => {
		this.setState({ setting: value })
	}

	handleClick = (target) => {
		this.fetchFromAPI(target.tmdb_id)
	}

  render() {
    console.log(this.state.movies)
    return (
      <div>
        <Home />
        <Search searchTerm={this.state.searchTerm} fetchMovies={this.fetchMovies} handleSelect={this.handleSelect} handleChange={this.handleChange} />
        <ResultsContainer setting={this.state.setting} movies={this.state.movies} searchTerm={this.state.searchTerm} results={this.state.results} handleClick={this.handleClick} handleSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
