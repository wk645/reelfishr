import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Movie = (props) => {

	const handleClick = () => props.handleClick(props.movie)

	return (
			<Card onClick={handleClick}>
				<Image src={`http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`} alt="" />
				<Card.Content>
				<Card.Header>{props.movie.title}</Card.Header>
				</Card.Content>
			</Card>
	)
}

export default Movie