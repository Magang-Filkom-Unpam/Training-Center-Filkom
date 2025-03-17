import { createContext, useReducer } from 'react';

const AuthContext = createContext(null);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                data: action.payload,
            };

        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        data: null,
    });

    return <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider };
