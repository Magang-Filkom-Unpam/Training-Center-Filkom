import { AuthContext } from '@/context/AuthContext.jsx';
import { use } from 'react';

export const useAuthContext = () => {
    const context = use(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within AuthContext');
    }

    return context;
};
