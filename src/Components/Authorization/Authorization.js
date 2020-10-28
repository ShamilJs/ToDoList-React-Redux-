import React, { useState } from 'react';

export const Authorization = () => {
    const [registr, setRegistr] = useState(false);

    const handleRegistr = (e) => {
		e.preventDefault();
		if (e.target.textContent === 'Зарегистрироваться') setRegistr(true);
		else setRegistr(false);
    }

    return (
        <div className="authoriz">
			{registr && <h2 className="authoriz__main">Создайте аккаунт и управляйте своими делами!</h2>}
			{!registr && <h2 className="authoriz__main">Войдите в свой личный кабинет и управляйте своими делами!</h2>}
			<form className="authoriz__form">
                {!registr && <p className="authoriz__title">Авторизация</p>}
                {registr && <p className="authoriz__title">Регистрация</p> }
				{registr && <><label htmlFor="name">Фамилия и имя</label>
                	<input name="name" className="authoriz__Name input-authoriz" type="text" placeholder="Введите фамилию и имя"/>
					</>
				}
                <label htmlFor="login">Логин</label>
                <input name="login" className="authoriz__login input-authoriz" type="text" placeholder="Введите логин"/>
                <label htmlFor="password">Пароль</label>
                <input name="password" className="authoriz__password input-authoriz" type="password" placeholder="Введите пароль"/>
                <div className="authoriz__form-control">
                    {!registr && <button className="authoriz__button btn-authoriz">Войти</button> }
                    {registr && <button className="authoriz__button btn-authoriz">Зарегистрироваться</button>}
                    {!registr && <a href="/" className="authoriz__achor"
                        onClick={handleRegistr}
                    >Зарегистрироваться</a>}
                    {registr && <a href="/" className="authoriz__achor"
						onClick={handleRegistr}
					>Есть аккаунт?</a>}
                </div>
            </form>
		</div>
    );
};