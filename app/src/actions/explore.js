import axios from "axios"



export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE'



export const FETCH_ENTRIES_REQUEST = 'FETCH_ENTRIES_REQUEST'
export function requestEntries() {
  return {
    type: FETCH_ENTRIES_REQUEST
  }
}


export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS'
export function recievedEntries(entries) {
  return {
    type: FETCH_ENTRIES_SUCCESS,
    entries,
    recievedAt: Date.now()
  }
}

export function fetchEntries() {
  return dispatch => {
    dispatch(requestEntries())

    return axios.get('http://localhost:3000/itineraries')
      .then(response => dispatch(recievedEntries(response.data)) )
  }
}
