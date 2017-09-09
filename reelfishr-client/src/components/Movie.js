import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

const Movie = (props) => {
	return (
		<div>
			<Grid.Column>
				<Card>
				<Image src={`http://image.tmdb.org/t/p/w185//${props.movies.poster_path}`} alt="" />
				<Card.Content>
				<Card.Header>{props.movies.title}</Card.Header>
				<Card.Description>
					<b>Synopsis:</b><p>{props.movies.overview}</p>
					<b>Runtime:</b><p>{props.movies.runtime}</p>
					<b>Popularity Rating:</b><p>{props.movies.popularity}</p>
				</Card.Description>
				</Card.Content>
				</Card>
			</Grid.Column>
		</div>
	)
}

export default Movie
			// <p>{props.movies.title}</p>
			// <p>{props.movies.overview}</p>
			// <p>{props.movies.runtime}</p>
			// <p>{props.movies.popularity}</p>
			// <img src={} alt=""/>