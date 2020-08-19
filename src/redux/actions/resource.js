import { resource as resActionTypes } from './action-types.js';

export const clearData = () => ({
    type: resActionTypes.clearData,
    
});

export const clearImmutableData = () => ({
    type: resActionTypes.clearImmutableData
});

export const setData = () => ({
    type: resActionTypes.setData
});

export const setImmutabelData = () => ({
    type: resActionTypes.setImmutabelData
});

export const setNotesData = () => ({
    type: resActionTypes.setNotesData
});


export const addNotesData = (notesContent) => ({
    type: resActionTypes.addNotesData, 
    notesContent
});

export const updateNotesContent = (id, notesContent) => ({
    type: resActionTypes.updateNotesContent, 
    id, 
    notesContent
});