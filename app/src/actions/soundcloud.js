import { SOUNDCLOUD_API_KEY } from '../../../config'

/**
 * INIT SC SDK
 */
SC.initialize({
  client_id: SOUNDCLOUD_API_KEY,
  redirect_uri: 'http://127.0.0.1/'
});


export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST'
function requestTracks() {
  return {
    type: 'FETCH_TRACKS_REQUEST'
  }
}

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
function recievedTracks(tracks) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    tracks,
    recievedAt: Date.now()
  }
}

export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE'
function fetchTracksFailure(error) {
  return {
    type: FETCH_TRACKS_FAILURE,
    error
  }
}

export function fetchTracks(title) {
  return dispatch => {
    dispatch(requestTracks())

    return SC.get('/tracks', { q: title, limit: 20 })
      .then(tracks => {
        dispatch(recievedTracks(tracks))
      })
      .catch(e => dispatch(fetchTracksFailure(e)))
  }
}


export const PLAY_TRACK = 'PLAY_TRACK'
export function playTrack(track) {
  return {
    type: PLAY_TRACK,
    track
  }
}

export const INIT_SC_PLAYER = 'INIT_SC_PLAYER'
export function initPlayer(sc_audio) {
  return {
    type: INIT_SC_PLAYER,
    sc_audio
  }
}

export const UPDATE_PLAYER_TIME = 'UPDATE_PLAYER_TIME'
export function updatePlayer(currentTime) {
  return {
    type: UPDATE_PLAYER_TIME,
    currentTime
  }
}
