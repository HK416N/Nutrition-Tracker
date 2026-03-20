import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/add">Add</NavLink>
            <NavLink to="/tracked">Tracked</NavLink>
        </nav>
    )
}

export default NavBar;