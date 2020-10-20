import { CREATE_COLLECTION_TO_DO, MAKE_COLLECTION_TO_DO_ACTIVE, CREATE_TO_DO_LIST, CHANGE_COMPLETE_STATE } from './types';

const initiaState = {
    collections: [],
	collectionActive: '',
	todoList: []
};



export const listItemReducer = (state = initiaState, action) => {
    switch (action.type) {
        case CREATE_COLLECTION_TO_DO: 
            return {...state, collections: state.collections.concat([action.payload])};
        case MAKE_COLLECTION_TO_DO_ACTIVE: 
            return {...state, collectionActive: action.payload};
		case CREATE_TO_DO_LIST: 
            return {...state, todoList: state.todoList.concat([action.payload])}; 
		case CHANGE_COMPLETE_STATE: 
			return {...state, todoList: state.todoList.map(item => (item[6] === action.id) ?
				[...item.splice(0, 5), item[5] = action.payload, item[6] = action.id ] : item)}; 
            
        default: return state;
    }



};