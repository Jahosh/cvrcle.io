import React from 'react'
import { NavBarContainer } from '../../containers'
import { connect } from 'react-redux';

// default view for the app
// see /src/routes for routes for this.props.children

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    // this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {
    return (
      // navbar persists throughout the whole app
      <div>
        {/*<NavBarContainer />*/}
        <h1> Explore </h1>
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
