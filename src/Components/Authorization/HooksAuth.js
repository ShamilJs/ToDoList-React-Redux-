import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAuthorizedUser, hideLoader, viewMessageAuth } from '../../redux/actions';


export const useChangeModal = () => {
    const [changeModal, setChangeModal] = useState(false);
    return { changeModal, setChangeModal }
}

export const useAuth = () => {
    const [authState, setAuthState] = useState({ 
        name: '',
        email: '',
        password: ''
    })
    return { authState, setAuthState};
};

export const useValue = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({name: '', id: ''});
    useEffect(() => {
        dispatch(createAuthorizedUser(value.name, value.id))
        dispatch(hideLoader())
    }, [value, dispatch]);
    return { value, setValue};
};

export const useMessage = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState({ on: false, text: ''});
    useEffect(() => {
        dispatch(viewMessageAuth(message.on, message.text))
        dispatch(hideLoader())
    }, [message, dispatch]);
    return { message, setMessage }
}