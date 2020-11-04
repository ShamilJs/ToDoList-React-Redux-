import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionToDo } from './Components/CollectionToDo/CollectionToDo';
import { Modal } from './Components/Modal/Modal';
import { Loader } from './Components/Other/Loader';
import { ModalRemove } from './Components/Modal/ModalRemove';
import { ToDoListItem } from './Components/ToDoListItem/ToDoListItem';
import './style.css';
import { ArrContext } from './Components/ContextHook';
import { Authorization } from './Components/Authorization/Authorization';
import { checkAuthorization, exitTheApp } from './FireBase/AuthUser';
import { createAuthorizedUser, hideLoader, readInitialState, showLoader, viewMessageAuth } from './redux/actions';
import { writeInDataBase, readFromDataBase } from './FireBase/DataBase';


const App = () => {
	const selectorApp = useSelector(state => state.app),
		modalRemove = useSelector(state => state.modalRemoveReduser),
		collections = useSelector(state => state.collections.collections),
		toDoList = useSelector(state => state.collections.todoList),
		collectionsActive = useSelector(state => state.collections.collectionActive),
		newTodoList = collections[collections.length - 1],
		newTodo = useSelector(state => state.collections.todoList[state.collections.todoList.length - 1]),
		authUser = useSelector(state => state.fireBase);
	let messageSide = '';

	const dispatch = useDispatch();
	const [sort, setSort] = useState([]);
	const [local, setLocal] = useState(null);
	const [temp, setTemp] = useState(false)
	const localUser = JSON.parse(localStorage.getItem('userId'));

	useEffect(() => {
		if (localUser !== '') {
			readFromDataBase(localUser)
			.then(list => {
				if (list) dispatch(readInitialState(list));
				setTemp(true);
			})
			.then(() => {
				dispatch(hideLoader())
			})
			.catch(error => console.log(error.message));
		}
		// eslint-disable-next-line
	}, [localUser]);

	useEffect(() => {
		if (localUser !== '') {
			if (temp) writeInDataBase(localUser, collections, collectionsActive, toDoList)
			.catch(error => console.log(error.message));
		}
		// eslint-disable-next-line
	}, [collections, collectionsActive, toDoList]);

	useEffect(() => {
		if ( localUser !== '') {
			dispatch(showLoader())
			checkAuthorization(localUser, setLocal)
		} else return
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (local !== null) {
			dispatch(createAuthorizedUser(local.name, local.id));
			
		} else return
	}, [local, dispatch])
	
	if (selectorApp.side === 'left' && newTodoList) messageSide = `Создан новый список "${newTodoList.title}"`;
	else if (selectorApp.side === 'right' && newTodo) messageSide = `Создано новое дело "${newTodo.title}"`;

	const exitProfile = () => {
		exitTheApp()
		.then(() => {
			localStorage.setItem('userId', JSON.stringify(''));
			dispatch(viewMessageAuth(false, ''));
			dispatch(createAuthorizedUser('', ''));
			dispatch(readInitialState(null));
			setTemp(false);
		})
		.catch(error => console.log(error))
	};
	
	return (
		<>
			<header className="header">
				<p className="header__title">ToDo List</p>
				{(authUser.userId !== '') &&
					<div className="header_login" onClick={exitProfile}>
						<img src="./img/exit.png" alt="выход"/>
						<p className="header_name">{authUser.userName}</p>
					</div>
				}
			</header>

			<main className="main">
				{(authUser.userId === '') && <Authorization />}
				{(authUser.userId !== '') &&
					<ArrContext.Provider value={sort}>
						<CollectionToDo sort={sort} setSort={setSort}/>
						<ToDoListItem/>
					</ArrContext.Provider>
				}
			</main>
			
			<Modal messageSide={messageSide} modal={selectorApp.modal}/>
			<ModalRemove modal={modalRemove.modal} id={modalRemove.id} side={modalRemove.side}/>
			<Loader loader={authUser.loader}/>
		</>
	);
}

export default App;
