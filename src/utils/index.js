export { NavigationActions, StackActions, } from 'react-navigation'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const createActionWithCallback = type => payload => callback => ({
  type,
  payload,
  callback,
})
