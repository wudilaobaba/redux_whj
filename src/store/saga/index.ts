import {all} from 'redux-saga/effects'
import counterSaga from './counter.saga'
import maskSaga from './mask.saga'
export default function* rootSaga() {
  yield all([
    counterSaga(),
    maskSaga()
  ])
}