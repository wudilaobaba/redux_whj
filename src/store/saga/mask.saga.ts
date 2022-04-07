import {takeEvery, put, delay} from 'redux-saga/effects'
import {showMask} from "../actions/mask.action";
import {SHOW_SAGA} from "../const/mask.const";
import {Action} from "../types/common";
// takeEvery接受action
// put 触发真正的reducer的action

function* add_saga_fn(action: Action<boolean>) {
  yield delay(2000);
  yield put(showMask(action.payload))
}

export default function* counterSaga() {
  // 接收action后执行add_saga_fn函数
  yield takeEvery(SHOW_SAGA, add_saga_fn)
}