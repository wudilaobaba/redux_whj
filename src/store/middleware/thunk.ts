import {Action} from '../types/common'

/**
 * 以约定的形式进行处理，action如果是一个函数，则做异步，否则，同步
 * @param store
 */
const thunk = (store: any) => (next: (action: Action) => void) => (action: (...args: any[]) => any | Action) => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  next(action)

}
export default thunk