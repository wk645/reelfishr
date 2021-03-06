// Home, search routes

import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Route } from 'react-router-dom'
import Search from './Search'

export default class MenuExampleBasic extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Segment inverted>
      <Menu inverted pointing secondary className="main-nav">
        <Menu.Item
          as={NavLink} to="/" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item as={NavLink} to="/search" exact name="Search" active={activeItem === 'Search'} onClick={this.handleItemClick} 
        >
          Search
        </Menu.Item>

        <Menu.Item style={{width: 298.95}} className="search">
        <Route exact path="/Search" render={() => <Search searchTerm={this.props.searchTerm} fetchMovies={this.props.fetchMovies} handleSelect={this.props.handleSelect} handleChange={this.props.handleChange} />} />
        </Menu.Item>
      </Menu>
    </Segment>
    )
  }
}
