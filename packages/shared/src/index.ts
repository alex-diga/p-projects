import debounce from './debounce'
import throttle from './throttle'
import screenshot from './screenshot'

export { screenshot, debounce, throttle }

export const objectToString = Object.prototype.toString

export const toTypeString = (value: unknown): string =>
  objectToString.call(value)

export const isArray = Array.isArray
export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]'
export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]'
export const isDate = (val: unknown): val is Date =>
  toTypeString(val) === '[object Date]'
export const isRegExp = (val: unknown): val is Date =>
  toTypeString(val) === '[object RegExp]'
export const isFunction = (val: unknown): val is (...args: any) => any =>
  typeof val === 'function'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === '[object Object]'

export const isDOMElement = (dom: unknown) => {
  return dom instanceof HTMLElement
}
