import * as ActionTypes from '../actions/soundcloud'
import AuthService from '../utils/AuthService'

export default function soundcloudReducer(state = {
  tracks: [],
  selectedTrack: {}
}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_TRACKS_REQUEST:
      return {...state, isFetching: true, error: null }
    case ActionTypes.FETCH_TRACKS_SUCCESS:
      return {...state, isFetching: false, tracks: action.tracks, error: null }
    case ActionTypes.FETCH_TRACKS_FAILURE:
      return {...state, isFetching: false, error: action.error }
    case ActionTypes.PLAY_TRACK:
      return {...state, selectedTrack: action.track }
    case ActionTypes.INIT_SC_PLAYER:
      return {...state, soundcloudAudio: action.sc_audio }
    case ActionTypes.UPDATE_PLAYER_TIME:
      return {...state, currentPlayerTime: action.currentTime }
    default:
      return state
  }
}