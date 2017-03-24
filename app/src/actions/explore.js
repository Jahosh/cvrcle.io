import axios from "axios"

export const FETCH_ENTRIES_REQUEST = 'FETCH_ENTRIES_REQUEST'
function requestEntries() {
  return {
    type: FETCH_ENTRIES_REQUEST
  }
}

export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS'
function recievedEntries(entries) {
  return {
    type: FETCH_ENTRIES_SUCCESS,
    entries,
    receivedAt: Date.now()
  }
}

export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE'
function fetchEntriesFailure(error) {
  return {
    type: FETCH_ENTRIES_FAILURE,
    error
  }
}

export function fetchEntries() {
  return dispatch => {
    dispatch(requestEntries())

    return axios.get('http://localhost:3000/explore')
      .then(response => dispatch(recievedEntries(response.data)))
      .catch(e => fetchEntriesFailure(e))
  }
}

/**
 *  Search Actions
 */
export const SEARCH_ENTRIES_REQUEST = 'SEARCH_ENTRIES_REQUEST'
export function searchEntriesRequest(value) {
  return {
    type: SEARCH_ENTRIES_REQUEST,
    value
  }
}

export const SEARCH_ENTRIES_SUCCESS = 'SEARCH_ENTRIES_SUCCESS'
function searchEntriesSuccess(foundEntries) {
  return {
    type: SEARCH_ENTRIES_SUCCESS,
    foundEntries
  }
}



