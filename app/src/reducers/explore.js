import * as ActionTypes from '../actions/explore'
import AuthService from '../utils/AuthService'

export default function exploreReducer(state = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  entries: [],
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ENTRIES_REQUEST:
      return { ...state, isFetching: true, error: null }
    case ActionTypes.FETCH_ENTRIES_SUCCESS:
      return {...state, isFetching: false, error: null}
    default:
      return state
  }
}