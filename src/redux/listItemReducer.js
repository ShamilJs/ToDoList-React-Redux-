import { CREATE_COLLECTION_TO_DO } from './types';

const initiaState = {
    collections: []
};



export const listItemReducer = (state = initiaState, action) => {
    switch (action.type) {
        case CREATE_COLLECTION_TO_DO: 
            return {...state, collections: state.collections.concat([action.payload])};
        default: return state;
    }



};