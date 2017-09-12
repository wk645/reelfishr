import React from 'react'
import { Card, Image, Popup, Button } from 'semantic-ui-react'

const Movie = (props) => {

	const handleClick = () => props.handleClick(props.movie)

	return (

		<Card onClick={handleClick} >
			<Image src={`http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`} alt="Image not Found" />
			<Card.Content>
			<Card.Header>{props.movie.title}</Card.Header>
			</Card.Content>
			<Popup trigger={<Button icon>Movie Info</Button>} 
			header={props.movie.title} 
			content={props.movie.overview}
			on={['hover', 'click']} />
		</Card>

	)
}

export default Movie

// displayModal = (movie) => {
// 		return (
// 		  <Modal open={this.state.clicked} onClose={this.handleClick}>
// 		    <Modal.Header>{team.name}</Modal.Header>
// 		    <Modal.Content image>
// 		      <Image wrapped size='medium' src={team.crestUrl} />
// 		      <Modal.Description>
// 		        <Header>{team.name}</Header>
// 		        <Players team={team} />
// 		      </Modal.Description>
// 		    </Modal.Content>
// 		  </Modal>	
// 		)
// 	}

// 	render() {
// 		return (
// 			<Grid.Column>
// 				<Card>
// 				<Image centered onClick={this.handleClick} style={{width: 250, height: 250}} src={this.state.team.crestUrl} />
// 				<Card.Content>
// 				<Card.Header>{this.state.team.name}</Card.Header>
// 				</Card.Content>
// 				</Card>
// 				{this.state.clicked && this.displayModal(this.state.team)}
// 			</Grid.Column>
// 		)
// 	}