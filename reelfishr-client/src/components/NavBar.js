// Home, search routes

import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleBasic extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={NavLink} to="/" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item as={NavLink} to="/search" exact name="Search" active={activeItem === 'Search'} onClick={this.handleItemClick} 
        >
          Search
        </Menu.Item>
      </Menu>
    )
  }
}