import {Action} from '../types/common'
const logger = (store: any) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
  // console.log(store)
  // console.log(action)
  // 传递给下个中间件或reducer
  next(action)
}
export default logger