import React from 'react'
import MovieCardFront from './MovieCardFront'
import MovieCardBack from './MovieCardBack'
import { Card } from 'semantic-ui-react'


export default class Movie extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			front: true
		}
	}

	handleClick = () => {
		this.props.handleClick(this.props.movie)
	}

	MouseEnter = () => {
		this.setState({ front: false })
	}

	MouseLeave = () => {
		this.setState({ front: true })
	}


	render() {

		return (
			<Card onClick={this.handleClick} onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}> 
				{this.state.front ? <MovieCardFront movie={this.props.movie} /> : <MovieCardBack movie={this.props.movie} /> }
			</Card>
		)
	}
}
