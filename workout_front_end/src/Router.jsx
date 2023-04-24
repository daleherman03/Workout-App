import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { Home } from "./components/Home";
import { History } from "./components/History";
import { Log } from "./components/Log";
import { Search } from "./components/Search";
import { LogRecord } from "./components/LogRecord";
import { Exercise } from "./components/Exercise";

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <SignUp />
        },
        {
            path:"/login/",
            element: <LogIn />
        },
        {
            path:"/home/",
            element: <Home />
        },
        {
            path:"/history/",
            element: <History />
        },
        {
            path:"/log/",
            element: <Log />
        },
        {
            path:"/search/",
            element: <Search />
        },
        {
            path:"/exercise/",
            element: <Exercise />
        },
        {
            path:"/LogRecord/",
            element: <LogRecord />
        }
    ]
}])

export default Router;