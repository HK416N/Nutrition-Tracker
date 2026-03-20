//to handle URLs entered in error
//https://reactrouter.com/how-to/file-route-conventions#catch-all-route
//for App.jsx: https://codesignal.com/learn/courses/routing-in-react-applications/lessons/navigating-across-the-universe-introducing-routing-with-react-router-v6

import { Link } from "react-router";

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Home</Link>
        </div>
        )
}

export default NotFound;