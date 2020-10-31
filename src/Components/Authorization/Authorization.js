import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewMessageAuth } from '../../redux/actions';
import { AuthButton } from './AuthButton';
import { AuthInput } from './AuthInput';
import { useAuth, useChangeModal } from './HooksAuth';
import { MessageAuth } from './MessageAuth';

export const Authorization = () => {
	const { changeModal, setChangeModal } = useChangeModal()
	const { authState, setAuthState } = useAuth();

	const dispatch = useDispatch();

	const messageOn = useSelector(state => state.fireBase.messageOn),
		messageText = useSelector(state => state.fireBase.messageText);	

    const changeAuthorizationWindow = (e) => {
		e.preventDefault();
		dispatch(viewMessageAuth('', ''));
		let value = (e.target.textContent === 'Зарегистрироваться') ?
			true : false;
		setChangeModal(value);
	};
	
	const changeStateAuth = (e) => {
		e.persist();
		let value = (e.target.name === 'email') ? 'email' : (e.target.name === 'name') ? 'name' : 'password';
		setAuthState(authState => ({...authState,
			[value]: e.target.value}));
	};

    return (
        <div className="authoriz">
			{changeModal && <h2 className="authoriz__main">Создайте аккаунт и управляйте своими делами!</h2>}
			{!changeModal && <h2 className="authoriz__main">Войдите в свой личный кабинет и управляйте своими делами!</h2>}
			<form className="authoriz__form">
                {!changeModal && <p className="authoriz__title">Авторизация</p>}
                {changeModal && <p className="authoriz__title">Регистрация</p> }
				{changeModal && <AuthInput type='name' state={authState.name} action={changeStateAuth}/>}
				<AuthInput type='email' state={authState.email} action={changeStateAuth}/>
				<AuthInput type='password' state={authState.password} action={changeStateAuth}/>

                <div className="authoriz__form-control">
					{messageOn && <MessageAuth text={messageText}/>}
					{!changeModal && <AuthButton authState={authState} title='Войти'/>}
                    {changeModal && <AuthButton authState={authState} title='Зарегистрироваться'/>}

                    {!changeModal &&
						<a href="/" 
							className="authoriz__achor"
							onClick={changeAuthorizationWindow}
							>Зарегистрироваться
						</a>
					}
                    {changeModal &&
						<a href="/" 
							className="authoriz__achor"
							onClick={changeAuthorizationWindow}
							>Есть аккаунт?
						</a>}
                </div>
            </form>
		</div>
    );
};