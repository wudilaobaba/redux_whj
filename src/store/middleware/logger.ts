const logger = (store: any) => (next: (action: { type: string }) => void) => (action: { type: string }) => {
  console.log(store)
  console.log(action)
  // 传递给下个中间件或reducer
  next(action)
}
export default logger