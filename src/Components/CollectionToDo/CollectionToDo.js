import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { TodoList } from '../TodoList/TodoList';


export const CollectionToDo = ({sort, setSort }) => {
	const selector = useSelector(state => state.collections);
	const todoList = selector.collections;

	const [select, setSelect] = useState('');

	const [result, setResult] = useState([]);

	const arr = useRef([]);

	let active = selector.collectionActive;

	const handleChange = useCallback(() => {
		if (select === '') return;
		if (select === 'Все списки') {
			setSort([...todoList]);
			setResult([...todoList]);
			return;
		}
		arr.current = todoList.filter(item => item.id === select);
		setResult([...arr.current]);
		setSort([...arr.current])
	}, [todoList, select, setSort]);

	useEffect(handleChange, [select]);

	useEffect(() => {
		setResult([...todoList]);
		handleChange();
	}, [todoList, handleChange])


    return (
			<div className="list-left list">
				<div className="list-left__content content">
					<FilterColection 
						setSelect={setSelect}
						todoList={todoList}
						handleChange={handleChange}
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