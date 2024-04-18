import React from 'react'
import './Navbar.css';
export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid navbar p-2">
                        <a className="navbar-brand" href="#">Age Calulator</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
