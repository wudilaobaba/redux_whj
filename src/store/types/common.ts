export type DispatchFun<T> = (payload: T) => { type: string, payload: T }
export type Action = {type: string}