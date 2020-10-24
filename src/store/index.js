import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import contactReducer from "./reducers/ContactReducer"

const reducers = combineReducers ({
  contactReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store