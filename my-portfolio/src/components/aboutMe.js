import React from 'react';
import '../App.css'
import avatar from '../../src/images/avatar.jpg'

function AboutMe() {
    return (
        <section class="container d-flex">
            <div>
                <img class="avatar rounded" src={avatar} alt="" />
            </div>
            <div class="mt-4 p-4 p-md-5 mb-5 text-white rounded-3 bg-dark aboutme">
                <div>
                    <div>
                        <h1>About Me</h1>
                        <p>
                            Hey! I'm Vincent, a full-stack developer located in South Florida. I been working on this portfolio to serve as a showcase for all of my current and future projects. I specialize in both front-end and back-end development with my foundation being built using the MERN stack.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;