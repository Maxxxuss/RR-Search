/**
 * Duck for resources that happen to be searchable.
 * @flow
 */


import { createSearchAction } from '../../components/search/index'

import faker from 'faker'
import Immutable from 'immutable'

import {resource as resActionTypes, 
         notes as actionTypes

} from '../actions/action-types'
import notesReducer from './notes'



export const State = Immutable.Record({
  map: Immutable.OrderedMap(),
  immutableMap: Immutable.OrderedMap(),
  notesMap: Immutable.OrderedMap(),
})



// Immutable Data attributes must be accessible as getters
const Record = Immutable.Record({
  id: null,
  name: null,
  title: null,
})

export const actions = {
  
  clearData: () =>({type: resActionTypes.clearData}),   
  clearImmutableData: ()=>({type: resActionTypes.clearImmutableData}), 

  generateData () {
    return (dispatch, getState) => {
      dispatch(actions.clearData())

      const data = {}
      for (var i = 0; i < 10; i++) {
        let id = faker.random.uuid()
        data[id] = {
          id: id,
          name: faker.name.findName(),
          title: faker.name.title()
        }
      }
      dispatch({
        type: resActionTypes.setData,
        payload: data
      })
    }
  },

  generateImmutableData () {
    return (dispatch, getState) => {
      dispatch(actions.clearImmutableData())
      const immutableMap = {}
      for (var i = 0; i < 10; i++) {
        let id = faker.random.uuid()
        immutableMap[id] = new Record({
          id: id,
          name: faker.name.findName(),
          title: faker.name.title()
        })
      }
      dispatch({
        type: resActionTypes.setImmutabelData,
        payload: Immutable.Map(immutableMap)
      })
    }
  },

  generateNotesData () {
    return (dispatch, getState) => {
      dispatch(actions.clearData())

      const notesData = {}
      for (var i = 0; i < 10; i++) {
        let id = faker.random.uuid()
        notesData[id] = {
          id: id,
          name: faker.name.findName(),
          title: faker.name.title()
        }
      }
      dispatch({
        type: resActionTypes.setNotesData,
        payload: notesData
      })
    }
  },



  searchData: createSearchAction('map'),
  searchImmutableData: createSearchAction('immutableMap'),
  searchNotes: createSearchAction('notesMap'),
}

export const actionHandlers = {
  [resActionTypes.clearData] (state) {
    return state.set('map', {})
  },
  [resActionTypes.clearData] (state) {
    return state.set('immutableMap', Immutable.Map())
  },
  [resActionTypes.setData] (state, { payload }): State {
    return state.set('map', payload)
  },
  [resActionTypes.setImmutabelData] (state, { payload }): State {
    return state.set('immutableMap', payload)
  },
  [resActionTypes.clearData] (state) {
    return state.set('notesMap', {})
  },
  [resActionTypes.setNotesData] (state, { payload }): State {
    return state.set('notesMap', payload)
  },



}

export const reducer = (state = new State(), action)=> {

  const { type } = action
  if (type in actionHandlers) {
    return actionHandlers[type](state, action)
  } else {
    return state
  }
}
