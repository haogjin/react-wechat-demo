import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [
  thunkMiddleware,
  createLogger()
]
console.log(rootReducer)
export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}