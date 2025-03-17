import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

// import pages
import CoursePage from '@/pages/CoursePage/index.jsx';
import HomePage from '@/pages/HomePage/index.jsx';
import NewsroomPage from '@/pages/NewsroomPage/index.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/course',
                element: <CoursePage />,
            },
            {
                path: '/newsroom',
                element: <NewsroomPage />,
            },
        ],
    },
]);
