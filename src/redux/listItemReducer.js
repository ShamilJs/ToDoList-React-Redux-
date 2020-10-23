import { CREATE_COLLECTION_TO_DO,
    MAKE_COLLECTION_TO_DO_ACTIVE,
    CREATE_TO_DO_LIST, CHANGE_COMPLETE_STATE,
    CHANGE_STATUS_COLLECTION_TO_DO_LIST
} from './types';

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
            return {...state, todoList: state.todoList.map(item => item.id === action.id ?
                {...item, complete: action.payload} : item)}
                
        case CHANGE_STATUS_COLLECTION_TO_DO_LIST:
            return {...state, collections: state.collections.map(item => item.title === action.title ?
                {...item, status: action.payload} : item)}

        default: return state;
    }

};