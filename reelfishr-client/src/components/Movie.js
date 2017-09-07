import React from 'react'

const Movie = (props) => {
	return (
		<div>
			{props.movie.original_title}
		</div>
	)
}

export default Movie