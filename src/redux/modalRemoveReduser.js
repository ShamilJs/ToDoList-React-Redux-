import { SHOW_MODAL_REMOVE_LIST_ITEM, HIDE_MODAL_REMOVE_LIST_ITEM } from './types';

const initiaState = {
    modal: false,
    id: '',
    side: ''

};


export const modalRemoveReduser = (state = initiaState, action) => {
    switch (action.type) {
        case SHOW_MODAL_REMOVE_LIST_ITEM: 
            return {...state, modal: action.payload, id: action.id, side: action.side ? action.side : ''};
        case HIDE_MODAL_REMOVE_LIST_ITEM: 
            return {...state, modal: action.payload};
        default: return state;
    }
};