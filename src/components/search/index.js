/* @flow */
import {
  defaultSearchStateSelector,
  getSearchSelectors
} from '../../redux/selectors/search'
import {search} from '../../redux/actions/search'
import reduxSearch from './reduxSearch'
import SearchApi from './SearchApi'
import reducer from '../../redux/reducers/searchReducer'

export default reduxSearch
export {
  defaultSearchStateSelector,
  getSearchSelectors,
  reduxSearch,
  reducer,
  search as createSearchAction,
  SearchApi
}
export { INDEX_MODES } from 'js-worker-search'
