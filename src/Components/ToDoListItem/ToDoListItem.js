import React, { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { ListItem } from './ListItem';
import { Inscription } from '../Other/Inscription';
import { ArrContext } from '../ContextHook';
import { SortButton } from '../Other/SortButton';

export const ToDoListItem = () => {
	const todoList = useSelector(state =>  state.collections.todoList),
		collections = useSelector(state =>  state.collections.collections),
		titleCollection = useSelector(state => state.collections.collectionActive);

	const result = todoList.filter(item => item.titleToDo === titleCollection);

	const arr = useContext(ArrContext);
	const temp = useRef(false);

	let count = 0;
	arr.forEach(item => {
		if (item.title !== titleCollection) {
			count ++;
			if (count === arr.length) {
				temp.current = true;
				return;
			} 
		} else {
			temp.current = false;	
		}
	});

    return (
        <div className="list-right list">
			{(titleCollection === '' && !collections.length) ?
				<Inscription inscription={'Добавьте новый список и перейдите в него для добавления нового дела'}/> :
				(titleCollection === '' && collections.length) ?
				<Inscription inscription={'Перейдите в существующий список или создайте новый'}/> :
				(arr.length && temp.current) ?
				<Inscription inscription={'Перейдите в существующий список'}/> :
				<>
					<div className="list-right__content content">
						{<span className="content__title">{titleCollection}</span>}
						<ListItem 
							todoList={todoList}
							titleCollection={titleCollection}
						/>
						{result.length > 1 && <SortButton title={'Сортировать по дате'} side={'right'}/> }
						<FilterColection toDoRight={true}/>
					</div>
					<div className="list-right__control control">
						<FormControl 
							placeholder={'Введите название нового дела'}
							toDoRight={true}
						/>
					</div>
				</>}
		</div>			 
    );
};