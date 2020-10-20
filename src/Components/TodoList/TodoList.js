import React from 'react';
// import { useSelector } from 'react-redux';

// import { ToDoListItem } from '../ToDoListItem/ToDoListItem';

export const TodoList = ({ todoList }) => {
    
    if (!todoList.length) {
        return <p>Списки дел не созданы</p>
    }
    // console.log(todoList);
    return (
        <ul className="content__todo todo-list">
			{todoList.map((item,i) => (<li className="todo-item list-active active" key={i}>
					<span className="text-todo -left">{item}</span>
					<div className="todo-buttons">
						<button className="todo-remove"></button>
					</div>
				</li>
			))}
            
		</ul>
    );
};