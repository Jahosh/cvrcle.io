import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import auth from './auth'
import explore from './explore'
import soundcloud from './soundcloud'

const rootReducer = combineReducers({
  routing,
  auth,
  soundcloud,
  explore
})

export default rootReducer