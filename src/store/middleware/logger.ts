import {Action} from '../types/common'
const logger = (store: any) => (next: (action: Action) => void) => (action: Action) => {
  // console.log(store)
  // console.log(action)
  // 传递给下个中间件或reducer
  next(action)
}
export default logger