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
					
	const sendToStore = (e) => {
		e.preventDefault();
		if (!form.title.trim()) return;
		if (toDoRight) {
			if (collection.length === 0) {
				return;
			}
			dispatch(createTodoList(form));
			dispatch(showModalSuccessful('right'));
			dispatch(changeStatusCollection(form.titleToDo, 2));
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
		const str = new Date();
		const target = e.target;
		const value =  target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setForm(form => ({...form, [name]: value,
			date: str.toLocaleDateString(),
			time: str.toLocaleTimeString(),
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