import { CREATE_COLLECTION_TO_DO,
        MAKE_COLLECTION_TO_DO_ACTIVE,
		SHOW_MODAL_SUCCESSFUL_OPERATION,
		HIDE_MODAL_SUCCESSFUL_OPERATION,
        CREATE_TO_DO_LIST,
        CHANGE_COMPLETE_STATE
	} from './types';

    
export const createCollection = collectionItem => {
    return {
        type: CREATE_COLLECTION_TO_DO,
        payload: collectionItem
    };
};

export const createTodoList = toDoListItem => {
    return {
        type: CREATE_TO_DO_LIST,
        payload: toDoListItem
    };
};

export const changeCompleteState = (completeState, id) => {
    return {
        type: CHANGE_COMPLETE_STATE,
        payload: completeState,
        id: id
    };
};

export const makeCollectionActive = collectionItem => {
    return {
        type: MAKE_COLLECTION_TO_DO_ACTIVE,
        payload: collectionItem
    };
};

export const showModalSuccessful = (side) => {
    return {
        type: SHOW_MODAL_SUCCESSFUL_OPERATION,
		payload: true,
		side: side
    };
};

export const hideModalSuccessful = (side) => {
    return {
        type: HIDE_MODAL_SUCCESSFUL_OPERATION,
		payload: false,
		side: side
    };
};