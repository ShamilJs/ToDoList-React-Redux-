import React from 'react';
import { useSelector } from 'react-redux';
import { CollectionToDo } from './Components/CollectionToDo/CollectionToDo';
import { Modal } from './Components/Modal/Modal';
import { ToDoListItem } from './Components/ToDoListItem/ToDoListItem';
import './style.css';

const App = () => {
	let messageSide = '';
	const selectorApp = useSelector(state => state.app);
	const selectorCollection = useSelector(state => state.collections.collections);
	const newTodoList = selectorCollection[selectorCollection.length-1];

	if (selectorApp.side === 'left' && newTodoList) {
		messageSide = `Создан новый список "${newTodoList[0]}"`;
	} else if (selectorApp.side === 'left' && newTodoList) {
		messageSide = `ЗАПОЛНИ МЕНЯ`;
	}


	return (
		<>
			<header className="header">
				<p className="header__title">ToDo List</p>
			</header>
			<main className="main">
				<CollectionToDo/>
				<ToDoListItem/>
			</main>
			{selectorApp.modal && <Modal messageSide={messageSide}/>}
		</>
	);
}

export default App;
