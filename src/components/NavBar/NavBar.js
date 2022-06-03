import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-4">
            <div className="container">
                <Link to="/" className="fs-3 text-center navbar-brand">Rick and Morty</Link>
                <button className="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <style jsx="true">
                        {`
                            button[aria-expanded="false"] > .close{
                                display : none;
                            }
                            button[aria-expanded="true"] > .open{
                                display : none;
                            }
                            `}
                    </style>
                    <i className="fas fa-bars open fw-bold text-dark"></i>
                    <i className="fas fa-times close fw-bold text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink activeclassname="active" to="/" className="nav-link">
                            Characters
                        </NavLink>
                        <NavLink to="/mywatchlist" className="nav-link">
                            My watch list
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
