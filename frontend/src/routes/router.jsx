import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../components/templates/DefaultLayout.jsx";
import HomePage from "../pages/homePage.jsx";
import BbbbbbPage from "../pages/bbbbbbPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <BbbbbbPage/>
            }
        ]
    }
]);

export default router;