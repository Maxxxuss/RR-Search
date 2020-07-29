import {
  search  as searchAction ,
  } from '../../redux/actions/action-types'

/**
 * Middleware for interacting with the search API
 * @param {Search} Search object
 */
export default function searchMiddleware (search: Object): Function {
  return ({ dispatch }) => next => action => {
    const { payload } = action
    if (action.type === searchAction) {
      const { method, args } = payload
      return search[method](...args)
    } else if (action.type === searchAction) {
      next(payload.action)
      return dispatch(payload.api)
    } else {
      return next(action)
    }
  }
}
