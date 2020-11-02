import React from 'react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader, viewMessageAuth, createAuthorizedUser } from '../../redux/actions';
import { authUser, regUser, updateProfile } from '../../FireBase/AuthUser';

export const AuthButton = ({ authState, title }) => {
    const dispatch = useDispatch();

    const authOrRegisterUser = (e) => {
        e.preventDefault();
        dispatch(showLoader());
        ((e.target.textContent === 'Войти') ?
            authUser(authState.email, authState.password) :
            regUser(authState.email, authState.password)
            .then(() => updateProfile(authState.name)))
        .then(user => {
            dispatch(viewMessageAuth('', ''));
            let value = authState.name ? 
                authState.name : user.displayName;
            dispatch(createAuthorizedUser(value, user.uid));
        })
        .catch(error => {
            dispatch(viewMessageAuth(true, error.message))
            dispatch(hideLoader());
        })
    };

    return (
        <button 
			disabled={(authState.email.trim() === '' ||
				authState.password.trim() === '') ? true : false} 
			className="authoriz__button btn-authoriz"
			onClick={authOrRegisterUser}
			>{title}
		</button>
    );
};