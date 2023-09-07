import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home ai 123</NavLink>
            <NavLink to="/contact">Contact ai 123</NavLink>
            <NavLink to="/about">About ai 124</NavLink>
        </div>

    )
}

export default Navbar;