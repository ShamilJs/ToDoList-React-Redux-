import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions';
import { AuthInput } from './AuthInput';
import { authUser, regUser } from './AuthUser';
import { useAuth, useChangeModal, useMessage, useValue } from './HooksAuth';
import { MessageAuth } from './MessageAuth';

export const Authorization = () => {
	const { changeModal, setChangeModal } = useChangeModal()
	const { authState, setAuthState } = useAuth();
	const { setValue } = useValue();
	const { setMessage } = useMessage();

	const messageOn = useSelector(state => state.fireBase.messageOn),
		messageText = useSelector(state => state.fireBase.messageText);

		const dispatch = useDispatch();

    const changeAuthorizationWindow = (e) => {
		e.preventDefault();
		setMessage({ on: false, text: ''})
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
				{changeModal && <>
					<label htmlFor="name">Имя<span className="input-authoriz-required">*</span></label>
					<AuthInput type='name' state={authState.name} action={changeStateAuth}/>
				</>}

                <label htmlFor="email">Электронная почта<span className="input-authoriz-required">*</span></label>
				<AuthInput type='email' state={authState.email} action={changeStateAuth}/>

                <label htmlFor="password">Пароль<span className="input-authoriz-required">*</span></label>
				<AuthInput type='password' state={authState.password} action={changeStateAuth}/>

                <div className="authoriz__form-control">
					{messageOn && <MessageAuth text={messageText}/>}
					{!changeModal &&
						<button 
							disabled={(authState.email.trim() === '' ||
								authState.password.trim() === '') ? true : false} 
							className="authoriz__button btn-authoriz"
							onClick={(e) => {
								e.preventDefault();
								dispatch(showLoader());
								authUser(authState.email, authState.password, setValue, setMessage);
							}}
						>Войти
						</button> }

                    {changeModal &&
						<button 
							disabled={(authState.email.trim() === '' ||
								authState.password.trim() === '' ||
								authState.name.trim() === '') ? true : false} 
							className="authoriz__button btn-authoriz"
							onClick={(e) => {
								e.preventDefault();
								dispatch(showLoader());
								regUser(authState.email, authState.password, authState.name, setValue, setMessage);

							}}
						>Зарегистрироваться
						</button>}

                    {!changeModal && <a href="/" className="authoriz__achor"
                        onClick={changeAuthorizationWindow}
                    >Зарегистрироваться</a>}
                    {changeModal && <a href="/" className="authoriz__achor"
						onClick={changeAuthorizationWindow}
					>Есть аккаунт?</a>}

                </div>
            </form>
		</div>
    );
};