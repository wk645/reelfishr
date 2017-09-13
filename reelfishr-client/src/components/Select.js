import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Select = (props) => {

	const select = (event, data) => {
		props.handleSelect(data.value)
	}

	const options = [
	  {
	    text: 'Get Similar Movies',
	    value: 'similar'
	  },
	  {
	    text: 'Get Recommendations',
	    value: 'recommendations'
	  }
	]

	return (
		<div>
			<center>
				<Dropdown className="border" placeholder="Select an Option" selection options={options} onChange={select} />
			</center>
			

		</div>
	)

}

export default Select