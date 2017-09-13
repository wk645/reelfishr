import React from 'react'
import { Input, Button, Popup } from 'semantic-ui-react'
import '../App.css';


const Search = (props) => {

	const click = (event) => {
		props.fetchMovies(props.searchTerm)
	}

	const change = (event) => {
		props.handleChange(event.target.value)
	}

	return (
		<div>
			<Popup trigger={<Input type="text" onChange={change} value={props.searchTerm} focus placeholder="Search for a Movie..." />} header="Movie Search" content="Type in a movie that you'd like to see or get information about!" on="focus" />
			<Button basic inverted color='yellow' secondary onClick={click} type="submit" value="Submit" name="Submit">Submit</Button>
		</div>
    )
}

export default Search