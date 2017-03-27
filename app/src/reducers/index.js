import { routerReducer as routing } from 'react-router-redux'
import { ignoreActions } from 'redux-ignore'
import { combineReducers } from 'redux'
import { UPDATE_PLAYER_TIME } from '../actions/soundcloud'
import auth from './auth'
import explore from './explore'
import soundcloud from './soundcloud'

const rootReducer = combineReducers({
  routing,
  auth,
  soundcloud: soundcloud,
  explore
})

export default rootReducer