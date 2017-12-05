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

// VmpFNmNERjJiM1ptZW5CNmNEUnlhblIwTlRwRVJWWkRSVTVVUlZJNlJWaFU6TldKRVpqbE1hMGc9

// access_token
// T1RLAQIyq7Ab2urX0jf9xhSbxVb39FgnyBAD818jPtTmBVNfH6XlructAADApo9xphwdDlT1ZQAiSitViziTwCleh13aQ66b+DKM4nHFgaAVWHB+1wBo5QmuYVhVtWL0sC/4mw6WnRwTtZzusoDsBrf+YMH0ONrsUmqSdy90iuEgpdeSIqGv2WxuQlQvcEeEh1qhgz08mYhjv+XamPTU5djAHEGt24/e7SdlxSAPEwq6te9vBd3nbOIRT4cpW0d3cSqsV+Sk96+jpNS9EhBLThNlGmCNvGhxk63ZM8Kf4pLNIqhEeaL8oZ7C4bIl
// token_type "bearer"