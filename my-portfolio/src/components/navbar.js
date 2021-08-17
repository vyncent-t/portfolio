import React from 'react';
import '../App.css'

function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://github.com/vyncent-t">Vincent</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://github.com/vyncent-t">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/vyncent-t">About me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/vyncent-t">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/vyncent-t">Contact me</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <span class="navsocials">
                            <i class="bi bi-github"></i>
                            <a href="https://github.com/vyncent-t" >Github</a></span
                        >
                        <span class="navsocials">
                            <i class="bi bi-linkedin"></i>
                            <a href="https://www.linkedin.com/in/vincent-taylor-jr/">Linkedin</a></span
                        >
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;