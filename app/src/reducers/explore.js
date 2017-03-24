import * as ActionTypes from '../actions/explore'
import AuthService from '../utils/AuthService'
import _ from 'lodash'

export default function exploreReducer(state = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  entries: [],
  searchTerm: '',
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ENTRIES_REQUEST:
      return { ...state, isFetching: true, error: null }
    case ActionTypes.FETCH_ENTRIES_SUCCESS:
      return {...state, isFetching: false, entries: action.entries, error: null}
    case ActionTypes.SEARCH_ENTRIES_REQUEST:
      const { entries, searchTerm } = state;
      const re = new RegExp(_.escapeRegExp(searchTerm), 'i')
      const isMatch = (result) => re.test(result.itinName)
      const results = _.filter(entries, isMatch)
    return { ...state, isSearching: true, searchTerm: action.value, results }
    default:
      return state
  }
}