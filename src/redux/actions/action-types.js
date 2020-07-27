import { initializeResources } from "redux-search/dist/commonjs/actions";

export const notes = {
    addNote: 'notes/addNote',
    deleteNote: 'notes/deleteNote',
    updateNoteContent: 'notes/updateNoteContent',
    setActiveNote: 'notes/setActiveNote',
};

export const tabs = {
    setActiveTab: 'tabs/setActiveTab',
};



export const search ={
    action: '@@reduxSearch/action',
    searchAPI: '@@reduxSearch/API', 
    searchStateSelector:'@@reduxSearch/searchStateSelector',
    searchAction: '@@reduxSearch/action',
    initializeResources : '@@reduxSearch/initializeResources',
    receiveResult: '@@reduxSearch/receiveResult',
    search: '@@reduxSearch/search',
    createSearchAction: '@@reduxSearch/createSearchAction',
    defineIndex: '@@reduxSearch/defineIndex',
    indexResource: '@@reduxSearch/indexResource',
    performSearch: '@@reduxSearch/performSearch',


}
