import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../components/templates/DefaultLayout.jsx";
import HomePage from "../pages/homePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
        ]
    }
]);

export default router;