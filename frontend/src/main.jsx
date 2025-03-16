import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./routes/router.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider value={defaultSystem}>
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </ChakraProvider>
    </StrictMode>,
)
