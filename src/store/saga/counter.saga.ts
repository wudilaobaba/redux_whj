import {takeEvery, put, delay} from 'redux-saga/effects'
import {add} from "../actions/counter.action";
import {ADD_SAGA} from "../const/counter.const";
import {Action} from "../types/common";
// takeEvery接受action
// put 触发真正的reducer的action

function* add_saga_fn(action: Action<number>) {
  yield delay(2000);
  yield put(add(action.payload))
}

export default function* counterSaga() {
  // 接收action后执行add_saga_fn函数
  yield takeEvery(ADD_SAGA, add_saga_fn)
}