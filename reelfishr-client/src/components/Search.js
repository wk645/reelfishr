import React from 'react'
import { Input, Button, Popup } from 'semantic-ui-react'

const Search = (props) => {

	const click = (event) => {
		props.fetchMovies(props.searchTerm)
	}

	// const select = (event) => {
	// 	props.handleSelect(event.target.value)
	// }

	const change = (event) => {
		props.handleChange(event.target.value)
	}

	return (
		<div><center>
			<br />
			<br />
			<Popup trigger={<Input type="text" onChange={change} value={props.searchTerm} focus placeholder="Search for a Movie..." />} header="Movie Search" content="Type in a movie that you'd like to see or get information about!" on="focus" />
			<Button secondary onClick={click} type="submit" value="Submit" name="Submit">Submit</Button>
			<br />
			<br />
	    </center></div>
    )
}

export default Search