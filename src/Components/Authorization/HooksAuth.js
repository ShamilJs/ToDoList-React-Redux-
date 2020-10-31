import {  useState } from 'react';

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
