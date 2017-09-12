import React from 'react'
import { Image, Card } from 'semantic-ui-react'

const MovieCardFront = (props) => {
	return (
		<Card>
			<Image src={`http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`} alt="Image not Found" />
			<Card.Content>
			<Card.Header>{props.movie.title}</Card.Header>
			</Card.Content>
		</Card>
	)
}

export default MovieCardFront