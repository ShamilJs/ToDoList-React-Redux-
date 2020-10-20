import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createCollection } from '../../redux/actions';


export const FormControl = ({ placeholder, toDoRight}) => {
	
	const [form, setForm] = useState({
										title:'', 
										fast: false,
										date:''
									});
	
	const dispatch = useDispatch();
							
	const createDate = () => {
		const dateNow = new Date();
		let str = {};
		str.date = dateNow.getDate() + "." + (dateNow.getMonth() + 1)	+ "." + dateNow.getFullYear();
		str.time = dateNow.getHours() + ":" + dateNow.getMinutes();
		return str;
	};

	const sendToStore = (e) => {
		e.preventDefault();
		const str = createDate();
		str && setForm(form => ({...form, date: str}));
		dispatch(createCollection(form.title));
		setForm({
			title:'', 
			fast: false,
			date:''
		});
	};

	
	const handleInputChange = (e) => {
		e.persist();
		const target = e.target;
		const value =  target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setForm(form => ({...form, [name]: value}));
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