import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import logger from './middleware/logger'
import thunk from './middleware/thunk'

export const store = createStore(reducer, applyMiddleware(logger,thunk))