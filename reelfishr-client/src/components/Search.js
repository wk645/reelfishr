import React from 'react'

const Search = (props) => {
	return (
		<div><center>
			<input type="text" onChange={props.handleChange} value={props.searchTerm} placeholder={"Search for a Movie"} />
	    </center></div>
    )
}

export default Search