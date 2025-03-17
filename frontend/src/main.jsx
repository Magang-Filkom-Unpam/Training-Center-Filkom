import { AuthContextProvider } from '@/context/AuthContext.jsx';
import { router } from '@/routes/router.jsx';
import { system } from '@/theme/theme.js';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider value={system}>
            <RouterProvider router={router}>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </RouterProvider>
        </ChakraProvider>
    </StrictMode>
);
