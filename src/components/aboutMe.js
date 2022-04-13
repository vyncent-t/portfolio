import React from 'react';
import '../App.css'
import avatar from '../../src/images/avatar.jpg'

function AboutMe() {
    return (
        <section className="container d-flex flex-wrap justify-content-evenly align-items-center my-3 ">
            <div className='col-lg-4 '>
                <img class="avatar" src={avatar} alt="self-portrait" />
            </div>
            <div className=" col-lg-8 p-4 ">
                <div className=" p-4 text-white rounded-3 bgcolor boxshadow">
                    <h1>About Me</h1>
                    <p className='mt-3'>
                        Hello! I'm Vincent, a proud graduate of the Full Stack Web Development program of the University of Miami as well as an FIU Alumni with an bachelor's in International Relations.

                        Primarily a MERN Stack developer with strong proficiency in JavaScript, HTML, and CSS, with an emphasis on the React JavaScript framework for my front-end works, while using my choice of MongoDB or MySQL along with Node js. and a wide variety of NPM tools/packages for back-end.

                        Beyond being a passionate and self-motivated Software Engineer, I have been described as an analytical thinker with a knack for problem solving who is open to new and creative approaches to explore any challenge.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;