export type DispatchFun<T> = (payload: T) => { type: string, payload: T }
export type Action<T> = {type: string, payload: T}