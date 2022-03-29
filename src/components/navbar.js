import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './NavbarStyles.module.css'

function Navbar() {
    return (
        <nav >
            <div className={style.navlogo}>
                <p>@Vincent</p>
            </div>
            <div >
                <ul>
                    <li>
                        <span>
                            <i className="bi bi-github"></i>
                            <a href="https://github.com/vyncent-t" >Github</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className="bi bi-linkedin"></i>
                            <a href="https://www.linkedin.com/in/vincent-taylor-jr/">Linkedin</a>
                        </span>
                    </li>
                    <li>
                        <a href="/portfolio">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/portfolio/#about">About me</a>
                    </li>
                    <li className="nav-item">
                        <a href="/portfolio/#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;