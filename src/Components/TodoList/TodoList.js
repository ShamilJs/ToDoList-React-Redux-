import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCollectionActive } from '../../redux/actions';
import { Inscription } from '../Other/Inscription';

export const TodoList = ({ todoList, active }) => {
	const dispatch = useDispatch();
	const [activeClass, setActiveClass] = useState('todo-item list-active active');

    if (!todoList.length) {
        return <Inscription inscription={'Списки дел не созданы'}/>
    }
    return (
        <ul className="content__todo todo-list">
			{todoList.map((item,i) => (<li className={(item[0] === active) ? activeClass : ('todo-item list-active')} 
											key={item[4]}>
					<span 
						className="text-todo -left"
						onClick={(e) => {
							dispatch(makeCollectionActive(e.target.textContent));
							setActiveClass('todo-item list-active active');
						}}
					>{item[0]}</span>
					<div className="todo-buttons">
						<button className="todo-remove"></button>
					</div>
				</li>
			))} 
		</ul>
    );
};