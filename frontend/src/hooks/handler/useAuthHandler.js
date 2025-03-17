import { useAuthContext } from '@/hooks/context/useAuthContext.js';
import { useState } from 'react';

export const useAuthHandler = () => {
    const { dispatch } = useAuthContext();

    const [state, setState] = useState({
        loading: false,
        error: null,
    });

    const requestAuth = async () => {};

    return {
        register: () => {},
        login: () => {},
    };
};
