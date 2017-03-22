import React from 'react'
import { NavBarContainer } from '../../containers'
import { connect } from 'react-redux'
import { Header, Icon, Image } from 'semantic-ui-react'
import axios from "axios"

// default view for the app
// see /src/routes for routes for this.props.children

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    // this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
    console.log(props)
  }
  grabProfiles() {
    axios.get('http://localhost:3000/itineraries').then( (resp) => {
      console.log(resp);
    });
  }
  render() {
    this.grabProfiles();
    return (
      // navbar persists throughout the whole app
      <div>
        {/*<NavBarContainer />*/}
        <Header as='h1' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            itineraries
          </Header.Content>
        </Header>
      </div>
    )
  }
}

ExplorePage.propTypes = {

}

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile
  }
}

export default ExplorePage = connect(mapStateToProps)(ExplorePage)
