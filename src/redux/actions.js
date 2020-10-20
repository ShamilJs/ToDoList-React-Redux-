// import { CollectionToDo } from '../Components/CollectionToDo/CollectionToDo';
import { CREATE_COLLECTION_TO_DO } from './types';

export const createCollection = (collectionItem) => {
    return {
        type: CREATE_COLLECTION_TO_DO,
        payload: collectionItem

    }
}