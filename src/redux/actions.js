import { CREATE_COLLECTION_TO_DO,
        MAKE_COLLECTION_TO_DO_ACTIVE,
		SHOW_MODAL_SUCCESSFUL_OPERATION,
        HIDE_MODAL_SUCCESSFUL_OPERATION,
        HIDE_MODAL_REMOVE_LIST_ITEM,
        SHOW_MODAL_REMOVE_LIST_ITEM,
        CREATE_TO_DO_LIST,
        CHANGE_COMPLETE_STATE,
        CHANGE_STATUS_COLLECTION_TO_DO_LIST,
        REMOVE_LIST_ITEM,
        REMOVE_LIST_ITEM_WHEN_DELETING_A_SHEET,
        REMOVE_LIST,
        REMOVE_LIST_ALL,
        SORT_BY_DATA } from './types';

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

export const showModalRemove = (id, side) => {
    return {
        type: SHOW_MODAL_REMOVE_LIST_ITEM,
		payload: true,
        id: id,
        side: side
    };
};

export const hideModalRemove = () => {
    return {
        type: HIDE_MODAL_REMOVE_LIST_ITEM,
		payload: false
    };
};

export const removeItem = (id) => {
    return {
        type: REMOVE_LIST_ITEM,
		payload: id
    };
};

export const removeItemWhenDaletingASheet = (title) => {
    return {
        type: REMOVE_LIST_ITEM_WHEN_DELETING_A_SHEET,
		payload: title
    };
};

export const removeList = (id) => {
    return {
        type: REMOVE_LIST,
		payload: id
    };
};

export const removeListAll = () => {
    return {
        type: REMOVE_LIST_ALL,
		payload: []
    };
};

export const changeStatusCollection = (title, status) => {
    return {
        type: CHANGE_STATUS_COLLECTION_TO_DO_LIST,
		payload: status,
		title: title
    };
};

export const sortByData = () => {
    return {
        type: SORT_BY_DATA
    };
};
