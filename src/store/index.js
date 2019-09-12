import { createStore, applyMiddleware, compose  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [
  thunkMiddleware,
  createLogger()
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
console.log(rootReducer)
export default function configStore () {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
  return store
}