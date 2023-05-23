import React from 'react'
import "./nav.css"

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">

                <a className="navbar-brand" href="#">Mi<span id="colored-text">Casa</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent