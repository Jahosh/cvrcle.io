import { connect } from 'react-redux'
import { checkLogin } from '../../actions/auth'
import { requestEntries, fetchEntries, recievedEntries, searchEntriesRequest } from '../../actions/explore'
import { Explore } from '../../components'

import React from 'react'
import { NavBarContainer } from '../../containers'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  const { entries, isFetching, searchTerm, results } = state.explore
  return {
    isAuthenticated,
    profile,
    isFetching,
    entries,
    searchTerm,
    results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchClick: () => {
      dispatch(fetchEntries())
    },
    checkLogin: () => {
      dispatch(checkLogin())
    },
    handleSearch: (e, value) => {
      dispatch(searchEntriesRequest(value))
    }
  }
}

const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(Explore)
export default ExplorePage