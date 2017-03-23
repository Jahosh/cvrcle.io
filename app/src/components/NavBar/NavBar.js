import React, { Component } from 'react'
import { Navbar, NavbarHeader, Nav, NavItem } from 'react-bootstrap'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

// props passed down from redux store

const NavBar = ({ isAuthenticated, onLoginClick, onLogoutClick }) =>
  <div>
    <Navbar inverse>
      <Navbar.Header>
          <Link to='/home'>
          <Image className="cvrcle-logo-icon" src='./images/cvrcle-logo-icon.png' />
        </Link>
      </Navbar.Header>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav pullRight>
          <LinkContainer to="/explore">
            <NavItem eventKey={2}>Explore</NavItem>
          </LinkContainer>
        { !isAuthenticated ? 
        (<NavItem eventKey={3} onClick={onLoginClick}>Login</NavItem>) : 
        (<NavItem eventKey={4} onClick={onLogoutClick}>Logout</NavItem> )}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

NavBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired
}

export default NavBar
