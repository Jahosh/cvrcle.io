import { connect } from 'react-redux'
import { checkLogin } from '../../actions/auth'
import { Explore } from '../../components'

import React from 'react'
import { NavBarContainer } from '../../containers'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile
  }
}

const ExplorePage = connect(mapStateToProps)(Explore)
export default ExplorePage