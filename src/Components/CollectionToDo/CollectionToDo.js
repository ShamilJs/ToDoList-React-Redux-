import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { TodoList } from '../TodoList/TodoList';
import { makeCollectionActive } from '../../redux/actions';

export const CollectionToDo = () => {
	const dispatch = useDispatch();
	const selector = useSelector(state => state.collections);
	const todoList = selector.collections;

	const [value, setValue] = useState('Bce списки');

	const [result, setResult] = useState([]);
	useEffect(() => {
		setResult([...todoList])
	}, [todoList])


	let active = selector.collectionActive;

	let arr = [];

	const changeSelect = () => {
		if (!value){
			arr = todoList;
			setResult([...arr]);
			active = selector.collectionActive;
			return;
		}
		if (value !== 'Bce списки') {
			arr = todoList.filter(item => item.id === value);
			active = result[0].title;
		}
		setResult([...arr]);
		dispatch(makeCollectionActive(active));
	};
	useEffect(changeSelect, [value]);

    return (
        <div className="list-left list">
			<div className="list-left__content content">
				<FilterColection 
					todoList={todoList}
					value={value}
					setValue={setValue}
				/>
				<TodoList 
					todoList={result}
					active={active}
				/>
			</div>
            <FormControl 
                placeholder={'Введите название нового списка'}/>
        </div>
    );
};