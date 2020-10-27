import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterColection } from '../FilterCollection/FilterColection';
import { FormControl } from '../FormControl/FormControl';
import { TodoList } from '../TodoList/TodoList';
import { SortButton } from '../Other/SortButton';


export const CollectionToDo = ({ setSort }) => {
	const selector = useSelector(state => state.collections),
		todoList = selector.collections;
	
	const [select, setSelect] = useState('');
	const [alphabet, setAlphabet] = useState(false);
	const [result, setResult] = useState([]);

	const arr = useRef([]);

	let active = selector.collectionActive;

	const handleChange = useCallback(() => {
		if (select === '') return;
		if (select === 'Все списки') arr.current = todoList;
		if (select === 'Неисполненные') arr.current = todoList.filter(item => item.status === 2 || item.status === 0);
		if (select === 'Исполненные') arr.current = todoList.filter(item => item.status === 1);
		setResult([...arr.current]);
		setSort([...arr.current])
	}, [todoList, select, setSort]);

	useEffect(handleChange, [select]);

	useEffect(() => {
		setResult([...todoList]);
		if (!alphabet) handleChange();
		setAlphabet(false);
	}, [todoList, handleChange, alphabet])


    return (
			<div className="list-left list">
				<div className="list-left__content content">
					<FilterColection 
						setSelect={setSelect}
					/>
					<SortButton title={''} setAlphabet={setAlphabet}/>
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