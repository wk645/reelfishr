import React from 'react'
import { Input, Button } from 'semantic-ui-react'

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
			<Input type="text" onChange={change} value={props.searchTerm} focus placeholder="Search for a Movie..." />
			<Button secondary onClick={click} type="submit" value="Submit" name="Submit">Submit</Button>
			<br />
			<br />
	    </center></div>
    )
}

export default Search

// <Dropdown placeholder="Select an Option" fluid selection options={options} onChange={select} />

// <select onChange={select}>
// 	<option value="similar">Get Similar Movies
// 	</option>
// 	<option value="recommendations">Get Recommendations
// 	</option>
// </select>