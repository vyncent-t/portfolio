import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './NavbarStyles.module.css'

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex align-items-center fs-5">
                <div className={`${style.navtitle} d-flex align-items-center text-light`}>
                    <h4>Vincent</h4>
                </div>
                <div className="navbar-text fs-5 d-flex justify-content-between">
                    <span className={style.navsocial}>
                        <i className="bi bi-github"></i>
                        <a href="https://github.com/vyncent-t" >Github</a></span
                    >
                    <span className={style.navsocial}>
                        <i className="bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/vincent-taylor-jr/">Linkedin</a></span
                    >
                </div>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarText">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio/#about">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio/#projects">Projects</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="https://github.com/vyncent-t">Contact me</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;