import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, useParams, NavLink } from 'react-router-dom';
import { makeCollectionActive, showModalRemove } from '../../redux/actions';
import { Inscription } from '../Other/Inscription';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const TodoList = ({ todoList, active }) => {
	const dispatch = useDispatch();
    if (!todoList.length) return <Inscription inscription={'Списки дел не созданы'} simple={true}/>
	
    return (
		<Router>
			<TransitionGroup component="ul" className="content__todo todo-list">
				{todoList.map(item => (
					<CSSTransition 
						key={item.id}
						classNames={'note'}
						timeout={800}
					>
						<li className={
							(item.status === 0) ? `todo-item ${(item.title === active) ? 'actives' : ''}` :
							(item.status === 1) ? `todo-item ${(item.title === active) ? 'actives' : ''} list-active` :
							(`todo-item ${(item.title === active) ? 'actives' : ''} list-compl`)
							} 
						>
							<NavLink to={`/${item.title}`}>
								<span className="text-todo -left">{item.title}</span>
								<div className="todo-buttons left-buttons">
									<button 
										className="todo-remove"
										onClick={() => dispatch(showModalRemove(item.id, 'left'))}
									/>
								</div>
							</NavLink>
						</li> 
					</CSSTransition>
				))} 
			</TransitionGroup>
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