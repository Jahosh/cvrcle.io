import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './explore'
import * as types from './explore'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_ENTRIES_SUCCESS when fetching entries is done', () => {
    nock('http://localhost:0000/')
      .get('/itineraries')
      .reply(200, { body: { entries: [] }})

    const expectedActions = [
      { type: types.FETCH_ENTRIES_REQUEST },
      { type: types.FETCH_ENTRIES_SUCCESS }
    ]
    const store = mockStore({ entries: [] })

    return store.dispatch(actions.fetchEntries())
      .then(() => {
        expect(store.getActions()).toEqual(expect.anything())
      })
  })
})