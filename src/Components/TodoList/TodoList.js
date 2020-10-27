import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Route, BrowserRouter as Router, Switch, useParams, NavLink } from 'react-router-dom';
import { makeCollectionActive, showModalRemove } from '../../redux/actions';
import { Inscription } from '../Other/Inscription';

// import { ArrContext } from '../ContextHook';


export const TodoList = ({ todoList, active }) => {
	const dispatch = useDispatch();
	// const arr = useContext(ArrContext);
    if (!todoList.length) return <Inscription inscription={'Списки дел не созданы'}/>
	
    return (
		<Router>
			<ul className="content__todo todo-list">
				{todoList.map(item => (
					<li className={
						(item.status === 0) ? `todo-item ${(item.title === active) ? 'active' : ''}` :
						(item.status === 1) ? `todo-item ${(item.title === active) ? 'active' : ''} list-active` :
						(`todo-item ${(item.title === active) ? 'active' : ''} list-compl`)
						} 
						key={item.id}
					>
						<NavLink 
							to={`/${item.title}` } 
							activeStyle={{
										fontWeight: "bold"
									}}
						>
							<span className="text-todo -left">{item.title}</span>
							<div className="todo-buttons">
								<button 
									className="todo-remove"
									onClick={() => dispatch(showModalRemove(item.id, 'left'))}
								/>
							</div>
						</NavLink>
					</li> 
				))} 
			</ul>
			<Switch>
				<Route path="/:id" children={ <Child /> }/>
			</Switch>
		</Router>
    );
};


const Child = () => {
	let { id } = useParams();
	const dispatch = useDispatch();

	const toDoList = useSelector(state => state.collections.collections);

	useEffect(() => {
		toDoList.forEach(todo => {
			if (todo.title === id) {
				dispatch(makeCollectionActive(id));
				return;
			}
		});
	}, [id, dispatch, toDoList]);

	return null;
};