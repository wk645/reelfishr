import React from 'react'

const Search = (props) => {

	const click = (event) => {
		props.fetchCB(props.searchTerm)
	}

	return (
		<div><center>
			<input type="text" onChange={props.handleChange} value={props.searchTerm} placeholder={"Search for a Movie..."} />
			<button onClick={click} type="submit" value="Submit" />
			<br />
			<br />
	    </center></div>
    )
}

export default Search