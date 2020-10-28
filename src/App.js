import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CollectionToDo } from './Components/CollectionToDo/CollectionToDo';
import { Modal } from './Components/Modal/Modal';
import { ModalRemove } from './Components/Modal/ModalRemove';
import { ToDoListItem } from './Components/ToDoListItem/ToDoListItem';
import './style.css';
import { ArrContext } from './Components/ContextHook';
import { Authorization } from './Components/Authorization/Authorization';
import firebase from 'firebase/app';
import 'firebase/auth'
import { userId } from './Components/Authorization/AuthUser';


// const firebaseConfig = {
// 	apiKey: "AIzaSyDy9BSdaY9oU3VPzQUGZiFiXPCExhv33Fs",
// 	authDomain: "todolist-a22c4.firebaseapp.com",
// 	databaseURL: "https://todolist-a22c4.firebaseio.com",
// 	projectId: "todolist-a22c4",
// 	storageBucket: "todolist-a22c4.appspot.com",
// 	messagingSenderId: "770915980359",
// 	appId: "1:770915980359:web:7e79a8af69075ba7ce8d62"
//   };

// firebase.initializeApp(firebaseConfig);

const App = () => {
	// const user = firebase.auth().onAuthStateChanged();
	// console.log(user);
	// const user = userId();
	// console.log('user: ', user);

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
				<div className="header_login">
					<img src="./img/exit.png"/>
					<p className="header_name">Аккаунт</p>
				</div>
			</header>
			<main className="main">
				<Authorization/>
					{/* {firebase.auth().onAuthStateChanged(user => {
						if (user) {
							<>
								<ArrContext.Provider value={sort}>
									<CollectionToDo sort={sort} setSort={setSort}/>
									<ToDoListItem/>
								</ArrContext.Provider>
							</>
						} else {
							this.$router.push('/login')
						}
						})} */}
					{/* {user && <ArrContext.Provider value={sort}>
					<CollectionToDo sort={sort} setSort={setSort}/>
					<ToDoListItem/>
				</ArrContext.Provider> } */}
			</main>
			{selectorApp.modal && <Modal messageSide={messageSide}/>}
			{modalRemove.modal && <ModalRemove id={modalRemove.id} side={modalRemove.side}/>}
		</>
	);
}

export default App;
