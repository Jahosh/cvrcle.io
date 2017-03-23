import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import auth from './auth'
import explore from './explore'

const rootReducer = combineReducers({
  routing,
  auth,
  explore
})

export default rootReducer