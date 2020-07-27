import { combineReducers } from 'redux';
import tabs from './tabs.js';
import notes from './notes.js';
import { reducer as searchReducer, reduxSearch } from '../../components/search/index'
import { reducer as resourceReducer } from './resources'


export default combineReducers({
    tabs,
    notes,
    resources: resourceReducer,
    search: searchReducer

    
});
