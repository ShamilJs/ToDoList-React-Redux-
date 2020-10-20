import React from 'react';
import { useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { TodoList } from '../TodoList/TodoList';

export const CollectionToDo = () => {
    const todoList = useSelector(state => state.collections.collections);
    return (
        <div className="list-left list">
			<div className="list-left__content content">
				<FilterColection todoList={todoList}/>
				<TodoList todoList={todoList}/>
			</div>
            <FormControl 
                placeholder={'Введите название нового списка'}/>
        </div>
    );
};