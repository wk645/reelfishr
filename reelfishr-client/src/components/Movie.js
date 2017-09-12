import React from 'react'
import MovieCardFront from './MovieCardFront'
import MovieCardBack from './MovieCardBack'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Movie extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			movie: props.movie,
			front: true
		}
	}

	handleClick = () => 
		{this.props.handleClick(this.state.movie)}

	MouseEnter = () => {
		console.log("MouseEntering")
		this.setState({ front: false })
	}

	MouseLeave = () => {
		console.log("MouseLeaving")
		this.setState({ front: true })
	}


	render() {
		return (
			<Card onClick={this.handleClick} onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}>
				<Link to={`/search/${this.state.movie.id}`}> 
				{this.state.front ? <MovieCardFront movie={this.state.movie} /> : <MovieCardBack movie={this.state.movie} /> }
				</Link>
			</Card>
		)
	}
}
