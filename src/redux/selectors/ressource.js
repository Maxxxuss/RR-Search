import { createSelector } from 'reselect'
import {getSearchSelectors } from '../../components/search/index'
import Immutable from 'immutable'


export const resources = state => state.resources
export const resourceSelector = (resourceName, state) => state.resources.get(resourceName)
export const map = createSelector([resources], resources => resources.map)
export const immutableMap = createSelector([resources], resources => resources.immutableMap)

const selectors = getSearchSelectors({ resourceName: 'map', resourceSelector })
export const dataSearchText = selectors.text
export const filteredIdArray = selectors.result

const immutableSelectors = getSearchSelectors({ resourceName: 'immutableMap', resourceSelector })
export const immutableDataSearchText = immutableSelectors.text
export const filteredIdList = createSelector([immutableSelectors.result], result => Immutable.List(result))
