import { CREATE_AUTHORIZED_USER, VIEW_MESSAGE_AUTH, SHOW_LOADER, HIDE_LOADER } from './types';

const initiaState = {
    userName: '',
    userId: '',
    messageOn: false,
    messageText: '',
    loader: false
};


export const fireBaseReducer = (state = initiaState, action) => {
    switch (action.type) {
        case CREATE_AUTHORIZED_USER: 
            return {...state, userName: action.payload, userId: action.userId};
        case VIEW_MESSAGE_AUTH: 
            return {...state, messageOn: action.payload, messageText: action.text};
        case SHOW_LOADER: 
            return {...state, loader: action.payload};
        case HIDE_LOADER: 
            return {...state, loader: action.payload};
        default: return state;
    }
};