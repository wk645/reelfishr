import React from 'react'
import { Message } from 'semantic-ui-react'
import '../App.css';


const Home = () => {
	return (
		<div className="home"><center>
			<h1>Welcome to Reelfishr</h1>
			<br />
			<br />
		<Message compact={true}>
			<Message.Header>
				Reelfishr
			</Message.Header>
			<h3>The team at Reelfishr works to recommend movies to our users. To get started, type in a movie and select one of the options to get your personalized list of movies! Enjoy!</h3>
		</Message>
		</center></div>
	)
}

export default Home