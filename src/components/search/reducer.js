/** @flow */
import {
  search as searchActionTypes
} from '../../redux/actions/action-types'


/**
 * The user must add this reducer to their app store/tree.
 * By default it is assumed that this reducer will be added at :search.
 * If you use another location you must pass a custom :searchStateSelector to reduxSearch().
 */
export default function searchReducer (state = {}, { payload, type } = {}) {
  if (handlers.hasOwnProperty(type)) {
    return handlers[type](state, payload)
  } else {
    return state
  }
}

/**
 * Search state reducers.
 */
export const handlers = {
  [searchActionTypes.initializeResources] (state, { resourceNames }) {
    return resourceNames.reduce((result, resourceName) => {
      result[resourceName] = {
        isSearching: false,
        result: [],
        text: ''
      }
      return result
    }, { ...state })
  },

  [searchActionTypes.receiveResult] (state, { resourceName, result }) {
    return {
      ...state,
      [resourceName]: {
        ...state[resourceName],
        isSearching: false,
        result
      }
    }
  },

  [searchActionTypes.search] (state, { resourceName, text }) {
    return {
      ...state,
      [resourceName]: {
        ...state[resourceName],
        isSearching: true,
        text
      }
    }
  }
}
