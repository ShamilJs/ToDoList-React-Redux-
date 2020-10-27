import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CollectionToDo } from './Components/CollectionToDo/CollectionToDo';
import { Modal } from './Components/Modal/Modal';
import { ModalRemove } from './Components/Modal/ModalRemove';
import { ToDoListItem } from './Components/ToDoListItem/ToDoListItem';
import './style.css';
import { ArrContext } from './Components/ContextHook';
import { Authorization } from './Components/Authorization/Authorization';


const App = () => {
	let messageSide = '';
	const selectorApp = useSelector(state => state.app),
		modalRemove = useSelector(state => state.modalRemoveReduser),
		selectorCollection = useSelector(state => state.collections.collections),
		newTodoList = selectorCollection[selectorCollection.length - 1],
		newTodo = useSelector(state => state.collections.todoList[state.collections.todoList.length - 1]);

	if (selectorApp.side === 'left' && newTodoList) messageSide = `Создан новый список "${newTodoList.title}"`;
	else if (selectorApp.side === 'right' && newTodo) messageSide = `Создано новое дело "${newTodo.title}"`;

	const [sort, setSort] = useState([]);
	
	return (
		<>
			<header className="header">
				<p className="header__title">ToDo List</p>
			</header>
			<main className="main">
				<Authorization/>
				{/* <ArrContext.Provider value={sort}>
					<CollectionToDo sort={sort} setSort={setSort}/>
					<ToDoListItem/>
				</ArrContext.Provider> */}
			</main>
			{selectorApp.modal && <Modal messageSide={messageSide}/>}
			{modalRemove.modal && <ModalRemove id={modalRemove.id} side={modalRemove.side}/>}
		</>
	);
}

export default App;
