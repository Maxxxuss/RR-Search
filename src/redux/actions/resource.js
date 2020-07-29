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


