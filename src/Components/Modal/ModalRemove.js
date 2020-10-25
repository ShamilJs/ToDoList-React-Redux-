import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalRemove,
	removeItem,
	changeStatusCollection,
	removeList,
	makeCollectionActive,
	removeListAll
} from '../../redux/actions';

export const ModalRemove = ({ id, side }) => {
	const toDoListItems = useSelector(state => state.collections.todoList);
	const collections = useSelector(state => state.collections.collections);
	const collectionActive = useSelector(state => state.collections.collectionActive);
	const toDoActive = toDoListItems.filter(item => item.titleToDo === collectionActive);

	const dispatch = useDispatch();

	let itemName = '';
	let arr = [];

	if (side) {
		arr = collections;
	} else {
		arr = toDoListItems;
	}

	arr.forEach(element => {
		if (element.id === id) {
			itemName = element.title
		}
	});


    return (
        <div className="modal__remove modal">
            <div className="oveflow">
				<div className="modal__title">Удалить дело<br/>{itemName}?</div>
                <div className="modal__button button">
					<button 
						className="button__yes btn"
						onClick={() => {
							if (!side) {
								dispatch(removeItem(id));
								if (toDoActive.length === 1) {
									dispatch(changeStatusCollection(collectionActive, 0));
								} else {
									let count = 0;
									toDoActive.forEach(item => {
										if (item.complete) {
											count ++; 
											if (count === toDoActive.length - 1) {
												dispatch(changeStatusCollection(collectionActive, 2));
											}
										}
									})
								}
							} else {
								dispatch(removeList(id));
								if (collections.length > 1) {
									collections.forEach((item, index) => {
										if (item.title === collectionActive && item.id === id) {
											dispatch(makeCollectionActive(item[index - 1].title));
											return;
										}
									});
								}
								if (collections.length === 1) {
									dispatch(makeCollectionActive());
									dispatch(removeListAll());
								}
							}
							dispatch(hideModalRemove());
						}}
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


