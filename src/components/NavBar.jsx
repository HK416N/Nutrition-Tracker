import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/foods">Add Foods</NavLink>
            <NavLink to="/logs">My Logs</NavLink>
        </nav>
    )
}

export default NavBar;