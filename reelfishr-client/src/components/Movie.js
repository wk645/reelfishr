import React from 'react'
import MovieCardFront from './MovieCardFront'
import MovieCardBack from './MovieCardBack'
import { Card, Image } from 'semantic-ui-react'



export default class Movie extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			front: true
		}
	}

	handleClick = () => {
		this.props.handleClick(this.props.movie)
		this.props.history.push(`/search/${this.props.movie.id}`)

	}

	MouseEnter = () => {
		this.setState({ front: false })
	}

	MouseLeave = () => {
		this.setState({ front: true })
	}


	render() {

	let poster = this.props.movie.poster_path 
	poster = (poster === 'unavailable.jpg' ? poster = 'unavailable.jpg' : poster = `http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`)

		return (
			<Card onClick={this.handleClick} onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}> 
					{this.state.front ? <Image src={poster} /> : null}
					{this.state.front ? <MovieCardFront movie={this.props.movie} /> : <MovieCardBack movie={this.props.movie} /> }
			</Card>
		)
	}
}


