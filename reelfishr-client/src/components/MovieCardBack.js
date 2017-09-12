import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieCardBack = (props) => {
	return (
		<Card>
			<Card.Content>
			<Card.Header>{`${props.movie.title} (${props.movie.release_date})`}</Card.Header>
			<br />
			Synopsis: <p>{props.movie.overview}</p>
			Popularity Rating: <p>{props.movie.popularity}</p>
			</Card.Content>
		</Card>
	)
}

export default MovieCardBack