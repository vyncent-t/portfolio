import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './NavbarStyles.module.css'

function Navbar() {
    return (
        <>
            <nav className={style.nav} >
                <div className={style.navlist}>
                    <ul>
                        <li>
                            <a href="/portfolio">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/portfolio/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/portfolio/#projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;