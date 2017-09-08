import React from 'react'

const Search = (props) => {

	const click = (event) => {
		props.fetchCB(props.searchTerm)
	}

	return (
		<div><center>
			<input type="text" onChange={props.handleSearch} value={props.searchTerm} placeholder={"Search for a Movie..."} />
			<button onClick={click} type="submit" value="Submit" name="Submit">Submit</button>
			<br />
			<select onChange={props.handleSelect}>
				<option value="similar">Get Similar Movies
				</option>
				<option value="recommendations">Get Recommendations
				</option>
			</select>
			<br />
			<br />
	    </center></div>
    )
}

export default Search

// select box for recommendation (one) or similar movies (list)

// <select onChange={this.handleChange}>{this.state.competitions.map(competition => <option key={competition.id} value={competition.id}>{competition.caption}</option>)})
// 				</select>