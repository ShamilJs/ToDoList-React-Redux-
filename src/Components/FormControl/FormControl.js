import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createCollection,
	showModalSuccessful,
	createTodoList,
	changeStatusCollection } from '../../redux/actions';


export const FormControl = ({ placeholder, toDoRight }) => {
	const collections = useSelector(state => state.collections),
		collection = collections.collections,
		selector = collections.collectionActive;

	const dispatch = useDispatch();

	const [form, setForm] =
		useState({
				title:'', 
				fast: false,
				date: '',
				time: '',
				titleToDo: '',
				complete: false,
				id: ''
			});
					
	const createDate = () => {
		const dateNow = new Date();

		let str = {},
			day = (dateNow.getDate() + '').length > 1 ? (dateNow.getDate() + '') : '0' + dateNow.getDate(),
			month = ((dateNow.getMonth() + 1) + '').length > 1 ? ((dateNow.getMonth() + 1) + '') : '0' + (dateNow.getMonth() + 1),
			hours = (dateNow.getHours() + '').length > 1 ? (dateNow.getHours() + '') : '0' + dateNow.getHours(),
			minutes = (dateNow.getMinutes() + '').length > 1 ? (dateNow.getMinutes() + '') : '0' + dateNow.getMinutes(),
			seconds = (dateNow.getSeconds() + '').length > 1 ? (dateNow.getSeconds() + '') : '0' + dateNow.getSeconds();

		str.date = day + "." + month + "." + dateNow.getFullYear();
		str.time = hours + ":" + minutes + ":" + seconds;
		return str;
	};

	const sendToStore = (e) => {
		e.preventDefault();
		if (!form.title.trim()) return;
		if (toDoRight) {
			if (collection.length === 0) {
				return;
			}
			dispatch(createTodoList(form));
			dispatch(showModalSuccessful('right'));
			dispatch(changeStatusCollection(form.titleToDo, 1));
		} else {
			const formCollection = {
				title: form.title, 
				id: form.id
			};
			dispatch(createCollection(formCollection));
			dispatch(showModalSuccessful('left'));
			dispatch(changeStatusCollection(formCollection.title, 0));
		}
		setForm({
			title:'', 
			fast: false,
			date: '',
			time: '',
			titleToDo: '',
			complete: false,
			id: ''
		});
	};
	
	const handleInputChange = (e) => {
		e.persist();
		const str = createDate();
		const target = e.target;
		const value =  target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setForm(form => ({...form, [name]: value,
			date: str.date,
			time: str.time,
			titleToDo: selector,
			id: `cmr${(+ new Date()).toString(16)}`
		}));
	};

    return (		
		<>
			<form className="list-left__control todo-control">
				<label>
					<input 
						name='title'
						className="todo-control__input" 
						type="text" 
						placeholder={placeholder}
						value={form.title}
						onChange={handleInputChange}
					/>
				</label>
				
				<button 
					className="todo-control__button" 
					id="add"
					onClick={sendToStore}/>
			</form>	
			{toDoRight && (<div className="control__status status">
				<input 
					name='fast'
					type="checkbox" 
					className="status__input" 
					id="check"
					checked={form.fast}
					onChange={handleInputChange}
				/>
				<label htmlFor="check" className="status__title">Срочное</label>
			</div>)}
		</>
    );
};