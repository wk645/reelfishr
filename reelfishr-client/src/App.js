import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import ResultsContainer from './components/ResultsContainer'
import MoviesContainer from './components/MoviesContainer'
import Back from './components/Back'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import Select from './components/Select'

class App extends Component {

  constructor() {
  	super()

  	this.state = {
		movies: [],
		results: [],
		targetMovie: "",
		searchTerm: "",
		setting: ""
  	}
  }

	fetchFromAPI = (movie_id) => {
	
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/${this.state.setting}?api_key=2b11df788b627a6cd7c12d0399f6d17f`).then(res => res.json()).then(data => this.setState({ results: data.results }))
	}

	fetchMovies = (movie) => {
	let movieUrl = movie.replace(/\s/, '+').toLowerCase()
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
  	
    return (
      <div>
        <NavBar searchTerm={this.state.searchTerm} fetchMovies={this.fetchMovies} handleSelect={this.handleSelect} handleChange={this.handleChange}/>
        <Route path="/search/:id" component={Back} />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" render={() => <Select handleSelect={this.handleSelect} />}/>
        <Route exact path="/search" render={({history}) => <ResultsContainer setting={this.state.setting} history={history}movies={this.state.movies} searchTerm={this.state.searchTerm}handleClick={this.handleClick} handleSelect={this.handleSelect} results={this.state.results} />} />
        <Route path="/search/:id" render={() => <MoviesContainer movies={this.state.movies} searchTerm={this.state.searchTerm} results={this.state.results} handleClick={this.handleClick} setting={this.state.setting}/> } />
      </div>
    );
  }
}


export default App;



		// <Route exact path='/search' render={() => <MoviesContainer movies={props.movies} searchTerm={props.searchTerm} results={props.results} handleClick={props.handleClick} setting={props.setting}/> } />
