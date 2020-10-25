import React from 'react';
import { useDispatch } from 'react-redux';
import { makeCollectionActive, showModalRemove } from '../../redux/actions';
import { Inscription } from '../Other/Inscription';

export const TodoList = ({ todoList, active }) => {
	const dispatch = useDispatch();
	
    if (!todoList.length) {
        return <Inscription inscription={'Списки дел не созданы'}/>
	}
	
    return (
        <ul className="content__todo todo-list">
			{todoList.map(item => (<li className={
														(item.status === 0) ? `todo-item ${(item.title === active) ? 'active' : ''}` :
														(item.status === 1) ? `todo-item ${(item.title === active) ? 'active' : ''} list-active` :
														(`todo-item ${(item.title === active) ? 'active' : ''} list-compl`)
													} 
											key={item.id}>
					<span 
						className="text-todo -left"
						onClick={(e) => dispatch(makeCollectionActive(e.target.textContent))}
					>
						{item.title}
					</span>
					<div className="todo-buttons">
						<button 
							className="todo-remove"
							onClick={() => dispatch(showModalRemove(item.id, 'left'))}
						></button>
					</div>
				</li>
			))} 
		</ul>
    );
};