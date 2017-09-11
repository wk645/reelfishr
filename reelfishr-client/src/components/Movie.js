import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Movie = (props) => {

	return (
		<Card>
			<Image src={`http://image.tmdb.org/t/p/w185//${props.movies.poster_path}`} alt="" />
			<Card.Content>
			<Card.Header>{props.movies.title}</Card.Header>
			</Card.Content>
		</Card>
	)
}

export default Movie
			// <p>{props.movies.title}</p>
			// <p>{props.movies.overview}</p>
			// <p>{props.movies.runtime}</p>
			// <p>{props.movies.popularity}</p>
			// <img src={} alt=""/>
				// <Card.Description>
				// 	<b>Synopsis:</b><p>{props.movies.overview}</p>
				// 	<b>Runtime:</b><p>{props.movies.runtime}</p>
				// 	<b>Popularity Rating:</b><p>{props.movies.popularity}</p>
				// </Card.Description>