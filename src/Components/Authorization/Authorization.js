import React from 'react';

export const Authorization = () => {
    return (
        <div className="authoriz">
			<form className="authoriz__form">
                <p className="authoriz__title">Авторизация</p>
                <label htmlFor="login">Логин</label>
                <input name="login" className="authoriz__login input-authoriz" type="text" placeholder="Введите логин"></input>
                <label htmlFor="password">Пароль</label>
                <input name="password" className="authoriz__password input-authoriz" type="password" placeholder="Введите пароль"></input>
                <div className="authoriz__form-control">
                    <button className="authoriz__button btn-authoriz">Войти</button>
                    <a href="/" className="authoriz__achor">Зарегистрироваться</a>
                </div>
            </form>
		</div>
    );
};