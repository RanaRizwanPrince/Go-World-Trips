import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const closeNavbar = () => {
        const navbarToggler = document.querySelector('.navbar-collapse');
        if (navbarToggler.classList.contains('show')) {
            navbarToggler.classList.remove('show');
        }
        setDropdownOpen(false);
    };
    return (
        <><NavLink to="/">
            <center><img src="https://ik.imagekit.io/uvsjit70p/clogo?updatedAt=1771330760361" className="w-25 d-block d-lg-none" /></center>
        </NavLink>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <NavLink className="number d-block d-lg-none" to="tel:+447311132376">+44 7311 132376</NavLink>
                    <NavLink className="navbar-brand d-none d-lg-block" to="/"><img src="https://ik.imagekit.io/uvsjit70p/clogo?updatedAt=1771330760361" alt="Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link hover" to="/" onClick={closeNavbar}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hover" to="/Schengen_Visa" onClick={closeNavbar}>Schengen Visa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hover" to="/About" onClick={closeNavbar}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hover" to="/Blogs" onClick={closeNavbar}>Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hover" to="/Contact" onClick={closeNavbar}>Contact Us</NavLink>
                            </li>
                        </ul>
                        <NavLink className="number d-none d-lg-block" to="tel:+447311132376">+44 7311 132376</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;