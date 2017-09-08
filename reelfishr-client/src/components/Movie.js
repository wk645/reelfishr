import React from 'react'

const Movie = (props) => {
	return (
		<div>
			<center>
			<p>{props.movies.title}</p>
			<p>{props.movies.overview}</p>
			<p>{props.movies.runtime}</p>
			<p>{props.movies.popularity}</p>
			<img src={`http://image.tmdb.org/t/p/w185//${props.movies.poster_path}`} alt=""/>
			</center>
		</div>
	)
}

export default Movie