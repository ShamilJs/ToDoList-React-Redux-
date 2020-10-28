import React, { useState } from 'react';

export const useAutorization = () => {
    const [authState, setAuthState] = useState({ 
        email: '',
        password: ''
    })

    return { authState, setAuthState};
};