import "../style/Navbar.css"
import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">Vitality <span className="highlight">Edit</span></div>
            <NavLink className="nav-item " to="/"> Home </NavLink>
            <NavLink className="nav-item " to="/foods">Add Foods</NavLink>
            <NavLink className="nav-item " to="/logs">My Logs</NavLink>
        </nav>
    )
}

export default NavBar;