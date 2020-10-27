import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalRemove,
	removeItem,
	changeStatusCollection,
	removeList,
	makeCollectionActive,
	removeListAll,
	removeItemWhenDaletingASheet
} from '../../redux/actions';

export const ModalRemove = ({ id, side }) => {
	const toDoListItems = useSelector(state => state.collections.todoList),
		collections = useSelector(state => state.collections.collections),
		collectionActive = useSelector(state => state.collections.collectionActive),
		toDoActive = toDoListItems.filter(item => item.titleToDo === collectionActive);

	const dispatch = useDispatch();

	let itemName = '',
		arr = [];

	if (side) arr = collections;
	else arr = toDoListItems;

	arr.forEach(element => (element.id === id) ? itemName = element.title : itemName);

	const removeItems = () => {
		if (!side) {
			dispatch(removeItem(id));
			if (toDoActive.length === 1) {
				dispatch(changeStatusCollection(collectionActive, 0));
			} else {
				let count = 0;
				toDoActive.forEach(item => {
					if (item.complete) {
						count ++; 
						if (count === toDoActive.length - 1) dispatch(changeStatusCollection(collectionActive, 2));
					}
				});
			}
		} else {
			dispatch(removeList(id));
			dispatch(removeItemWhenDaletingASheet(itemName));
			if (collections.length === 1) dispatch(removeListAll());
			dispatch(makeCollectionActive(''));
		}
		dispatch(hideModalRemove());
	};

	
    return (
        <div className="modal__remove modal">
            <div className="oveflow">
				<div className="modal__title">Удалить дело<br/>{itemName}?</div>
                <div className="modal__button button">
					<button 
						className="button__yes btn"
						onClick={removeItems}
					>Да</button>
					<button 
						className="button__no btn"
						onClick={() => dispatch(hideModalRemove())}
					>Нет</button>
                </div>
				<div 
					className="modal__close"
					onClick={() => dispatch(hideModalRemove())}
				>X</div>
            </div>	
        </div>
	);
};


