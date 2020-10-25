import { SHOW_MODAL_SUCCESSFUL_OPERATION, HIDE_MODAL_SUCCESSFUL_OPERATION } from './types';

const initiaState = {
    modal: false,
    side: 'left'
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case SHOW_MODAL_SUCCESSFUL_OPERATION: 
            return {...state, modal: action.payload, side: action.side};
        case HIDE_MODAL_SUCCESSFUL_OPERATION: 
            return {...state, modal: action.payload};
        default: return state;
    }
};