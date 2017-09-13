import React from 'react'

const Clickable = (RenderedComponent) => {
	return class extends React.Component {

		
	handleClick = () => {
		this.props.handleClick(this.props.movie)
		this.props.history.push(`/search/${this.props.movie.id}`)
	}

	render() {
			return (
				<div className="ui card" onClick={this.handleClick}>
					<RenderedComponent {...this.props} />
				</div>
			)
		}
	}
}

export default Clickable