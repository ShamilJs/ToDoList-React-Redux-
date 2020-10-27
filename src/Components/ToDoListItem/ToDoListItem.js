import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { ListItem } from './ListItem';
import { sortByData } from '../../redux/actions';
import { Inscription } from '../Other/Inscription';
import { ArrContext } from '../ContextHook';

export const ToDoListItem = () => {
	const todoList = useSelector(state =>  state.collections.todoList),
		collections = useSelector(state =>  state.collections.collections),
		titleCollection = useSelector(state => state.collections.collectionActive);
	const dispatch = useDispatch();

	const result = todoList.filter(item => item.titleToDo === titleCollection);

	const arr = useContext(ArrContext);

    return (
        <div className="list-right list">
			{(titleCollection === '' && !collections.length) ?
				<Inscription inscription={'Добавьте новый список и перейдите в него для добавления нового дела'}/> :
				(titleCollection === '' && collections.length) ?
				<Inscription inscription={'Перейдите в существующий список или создайте новый'}/> :
				(arr.length === 1 && titleCollection !== arr[0].title) ?
				<Inscription inscription={'Перейдите в существующий список'}/> :
				<>
					<div className="list-right__content content">
						{<span className="content__title">{titleCollection}</span>}
						<ListItem 
							todoList={todoList}
							titleCollection={titleCollection}
						/>
						{result.length > 1 && <button 
							className="content__sort"
							onClick={() => dispatch(sortByData())}
						>
							<p className="sort__title">Сортировать по дате</p>
							<img src="./img/sort.png" alt="sort"/>
						</button>}
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