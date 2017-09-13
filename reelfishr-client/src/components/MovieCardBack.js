import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieCardBack = (props) => {
	return (
		<Card.Content>
			<Card.Header className="title">{`${props.movie.title} (${props.movie.release_date.split("-")[0]})`}</Card.Header>
			<br />
			Synopsis: <p className="synopsis">{props.movie.overview}</p>
			Popularity Rating: <p>{props.movie.popularity}</p>
		</Card.Content>

	)
}

export default MovieCardBack