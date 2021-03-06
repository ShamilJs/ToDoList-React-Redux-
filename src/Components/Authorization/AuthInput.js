import React from 'react';

export const AuthInput = ({	type, state, action}) => {
	const attribute = {
		name: type,
		className: 
			(type  === 'name') ?
			'authoriz__Name' :
			(type  === 'email') ?
			'authoriz__login' :
			'authoriz__password',
		placeholder: 
			(type  === 'name') ?
			'Введите имя' :
			(type  === 'email') ?
			'Электронная почта' :
			'Введите пароль',

	}
    return (
		<>
			<label htmlFor={type}>{(type === 'name') ? 'Имя' :
				(type === 'password') ? 'Пароль' : 'Электронная почта'}
				<span className="input-authoriz-required">*</span>
			</label>
			<input 
				name={attribute.name} 
				className={`${attribute.className} input-authoriz`}
				type={type} 
				placeholder={attribute.placeholder}
				required
				value={state}
				onChange={action}
			/>
		</>
    )
}