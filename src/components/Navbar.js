import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <NavLink to="/">hello world singapore</NavLink>
            <NavLink to="/contact">hello world usa</NavLink>
            <NavLink to="/about">About ai test</NavLink>
        </div>

    )
}

export default Navbar;