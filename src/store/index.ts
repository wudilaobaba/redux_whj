import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import logger from './middleware/logger'
import thunk from './middleware/thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)