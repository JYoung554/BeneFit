import thunk from 'redux-thunk'
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools/extension'
import AuthReducer from '../store/reducers/AuthReducer'

const store = legacy_createStore(
  combineReducers({
    authState: AuthReducer()
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
