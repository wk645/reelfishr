import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieCardFront = (props) => {
	
	return (
		<Card.Content>
			<Card.Header>{props.movie.title}</Card.Header>
		</Card.Content>
	)
}

export default MovieCardFront