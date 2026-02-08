import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const closeNavbar = () => {
        const navbarToggler = document.querySelector('.navbar-collapse');
        if (navbarToggler.classList.contains('show')) {
            navbarToggler.classList.remove('show');
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Go World Trips</NavLink>
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
                        <NavLink className="number" to="tel:+447311132376">+44 7311 132376</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;