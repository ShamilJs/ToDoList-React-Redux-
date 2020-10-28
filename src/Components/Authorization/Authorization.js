import React, { useState } from 'react';
import { authUser, regUser } from './AuthUser';
import { useAutorization } from './UseAutorization';

export const Authorization = () => {
    const [changeWindow, setChangeWindow] = useState(false);
    const { authState, setAuthState } = useAutorization();

    const changeAuthorizationWindow = (e) => {
		e.preventDefault();
		let value = (e.target.textContent === 'Зарегистрироваться') ?
			true : false;
		setChangeWindow(value);
	};
	
	const changeStateAuth = (e) => {
		e.persist();
		let value = (e.target.name === 'email') ? 'email' : 'password';
		setAuthState(authState => ({...authState,
			[value]: e.target.value}));
	};

    return (
        <div className="authoriz">
			{changeWindow && <h2 className="authoriz__main">Создайте аккаунт и управляйте своими делами!</h2>}
			{!changeWindow && <h2 className="authoriz__main">Войдите в свой личный кабинет и управляйте своими делами!</h2>}
			<form className="authoriz__form">
                {!changeWindow && <p className="authoriz__title">Авторизация</p>}
                {changeWindow && <p className="authoriz__title">Регистрация</p> }
				{changeWindow && <><label htmlFor="name">Фамилия и имя</label>
                	<input name="name" className="authoriz__Name input-authoriz" type="text" placeholder="Введите фамилию и имя"/>
					</>
				}
                <label htmlFor="email">Электронная почта<span className="input-authoriz-required">*</span></label>
                <input 
                    name="email" 
                    className="authoriz__login input-authoriz" 
                    type="email" 
                    placeholder="Электронная почта"
                    required
					value={authState.email}
					onChange={changeStateAuth} 
                />
                <label htmlFor="password">Пароль<span className="input-authoriz-required">*</span></label>
                <input 
                    name="password" 
                    className="authoriz__password input-authoriz" 
                    type="password" 
                    placeholder="Введите пароль"
					required
					value={authState.password}
					onChange={changeStateAuth}
                />
                <div className="authoriz__form-control">
					{!changeWindow &&
						<button className="authoriz__button btn-authoriz"
							onClick={(e) => {
								e.preventDefault();
								authUser(authState.email, authState.password);
							}}
						>Войти</button> }
                    {changeWindow &&
						<button className="authoriz__button btn-authoriz"
							onClick={(e) => {
								e.preventDefault();
								regUser(authState.email, authState.password);
							}}
						>Зарегистрироваться</button>}
                    {!changeWindow && <a href="/" className="authoriz__achor"
                        onClick={changeAuthorizationWindow}
                    >Зарегистрироваться</a>}
                    {changeWindow && <a href="/" className="authoriz__achor"
						onClick={changeAuthorizationWindow}
					>Есть аккаунт?</a>}
                </div>
            </form>
		</div>
    );
};