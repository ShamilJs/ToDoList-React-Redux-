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
import 'firebase/auth'
import { checkAuthorization, exitTheApp } from './Components/Authorization/AuthUser';
import { createAuthorizedUser, hideLoader, showLoader } from './redux/actions';
import { useMessage } from './Components/Authorization/HooksAuth';


const App = () => {
	const dispatch = useDispatch();
	const [local, setLocal] = useState({name: '', id: ''});
	const { setMessage } = useMessage();


	const localUser = JSON.parse(localStorage.getItem('userId'));

	useEffect(() => {
		if ( localUser !== '') {
			dispatch(showLoader())
			checkAuthorization(localUser, setLocal)
		} else {
			return
		}
	}, [localUser, dispatch])

	useEffect(() => {
		dispatch(createAuthorizedUser(local.name, local.id))
		dispatch(hideLoader())
	}, [local, dispatch])
	
	 
	let messageSide = '';
	const selectorApp = useSelector(state => state.app),
		modalRemove = useSelector(state => state.modalRemoveReduser),
		selectorCollection = useSelector(state => state.collections.collections),
		newTodoList = selectorCollection[selectorCollection.length - 1],
		newTodo = useSelector(state => state.collections.todoList[state.collections.todoList.length - 1]),
		authUser = useSelector(state => state.fireBase);

	

	if (selectorApp.side === 'left' && newTodoList) messageSide = `Создан новый список "${newTodoList.title}"`;
	else if (selectorApp.side === 'right' && newTodo) messageSide = `Создано новое дело "${newTodo.title}"`;

	const [sort, setSort] = useState([]);
	const [value, setValue] = useState(true);
	useEffect(() => {
		dispatch(createAuthorizedUser('', ''))
	}, [value, dispatch])
	
	return (
		<>
			<header className="header">
				<p className="header__title">ToDo List</p>
				{(authUser.userId !== '') &&
				<div 
					className="header_login"
					onClick={() => exitTheApp(setValue, setMessage)}
					>
					<img src="./img/exit.png" alt="выход"/>
					<p className="header_name">{authUser.userName}</p>
				</div>}
			</header>
			<main className="main">
				{(authUser.userId === '') && <Authorization/>}
					{(authUser.userId !== '') &&
							<>
								<ArrContext.Provider value={sort}>
									<CollectionToDo sort={sort} setSort={setSort}/>
									<ToDoListItem/>
								</ArrContext.Provider>
							</>
						
						 }
			</main>
			{selectorApp.modal && <Modal messageSide={messageSide}/>}
			{modalRemove.modal && <ModalRemove id={modalRemove.id} side={modalRemove.side}/>}
			{authUser.loader && <Loader/>}
		</>
	);
}

export default App;
