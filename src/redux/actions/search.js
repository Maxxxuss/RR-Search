import { search as actionTypes } from './action-types.js';

export const searchAPI = (method, args) => {
    return (...args) => ({
        type: actionTypes.searchAPI, 
        payload: {
            method,
            args
          }
    })
}

export function search (resourceName: string): Function {
  return function searchResource (text: string): Object {
    return {
      type: actionTypes.action,
      payload: {
        api: performSearch(resourceName, text),
        action: {
          type: actionTypes.search,
          payload: {
            resourceName,
            text
          }
        }
      }
    }
  }
}

  export const receiveResult = (resourceName) => {
    return function receiveResultForResource (result) {
      return {
        type: actionTypes.receiveResult,
        payload: {
          resourceName,
          result
        }
      }
    }
  }

export const initializeResources = (resourceNames) => {
  return {
    type: actionTypes.initializeResources,
    payload: {
      resourceNames
    }
  }
}

export const defineIndex = searchAPI('defineIndex')
export const indexResource = searchAPI('indexResource')
export const performSearch = searchAPI('performSearch')


