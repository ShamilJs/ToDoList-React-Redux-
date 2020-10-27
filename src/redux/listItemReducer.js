import { CREATE_COLLECTION_TO_DO,
    MAKE_COLLECTION_TO_DO_ACTIVE,
    CREATE_TO_DO_LIST, CHANGE_COMPLETE_STATE,
    CHANGE_STATUS_COLLECTION_TO_DO_LIST,
    REMOVE_LIST_ITEM,
    REMOVE_LIST,
    REMOVE_LIST_ALL,
    SORT_BY_DATA,
    REMOVE_LIST_ITEM_WHEN_DELETING_A_SHEET } from './types';

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
                {...item, complete: action.payload} : item)};
                
        case CHANGE_STATUS_COLLECTION_TO_DO_LIST:
            return {...state, collections: state.collections.map(item => item.title === action.title ?
                {...item, status: action.payload} : item)};

        case REMOVE_LIST_ITEM:
            return {...state, todoList: state.todoList.filter(item => item.id !== action.payload)};

        case REMOVE_LIST_ITEM_WHEN_DELETING_A_SHEET:
            return {...state, todoList: state.todoList.filter(item => item.titleToDo !== action.payload)};

        case REMOVE_LIST: 
            return { ...state, collections: state.collections.filter(item => item.id !== action.payload)};

        case REMOVE_LIST_ALL:
            return {...state, todoList: action.payload};
        
        case SORT_BY_DATA:
            return {...state, todoList: state.todoList.reverse()};

        default: return state;
    }

};