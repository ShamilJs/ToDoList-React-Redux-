import React from 'react';
import { useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { Inscription } from '../Other/Inscription';
import { ListItem } from './ListItem';

export const ToDoListItem = () => {
	const todoList = useSelector(state =>  state.collections.todoList);
	const titleCollection = useSelector(state => state.collections.collectionActive)
    return (
        <div className="list-right list">
			<div className="list-right__content content">
				{titleCollection ? <span className="content__title">{titleCollection}</span> : <Inscription inscription={'Список дел пуст'}/>}
				<ListItem todoList={todoList}/>
				<button className="content__sort">
					<p className="sort__title">Сортировать по дате</p>
					<img src="./img/sort.png" alt="sort"/>
				</button>
				<FilterColection toDoRight={true}/>
				{/* <select className="content__filter right_filter ">
					<option>Дела на неделю</option>
					<option>Дела на месяц</option>
				</select> */}
			</div>
			<div className="list-right__control control">
				<FormControl 
					placeholder={'Введите название нового дела'}
					toDoRight={true}
				/>
			</div> 
		</div>			 
    );
};