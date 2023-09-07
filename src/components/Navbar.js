import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <NavLink to="/">hello world</NavLink>
            <NavLink to="/contact">hello world vn</NavLink>
            <NavLink to="/about">About ai 124</NavLink>
        </div>

    )
}

export default Navbar;