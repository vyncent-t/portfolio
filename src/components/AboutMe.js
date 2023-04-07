import React from 'react';
import avatar from '../../src/images/avatar.jpg'
import style from './AboutMe.module.css'

function AboutMe() {
    return (
        <section className="container d-flex flex-wrap justify-content-evenly align-items-center my-3 ">
            <div className='col-lg-4 '>
                <img className={style.portraitphoto} src={avatar} alt="self-portrait" />
            </div>
            <div className=" col-lg-8 p-1 ">
                <div className=" d-flex flex-column justify-content-center align-items-center p-4 text-white rounded-3 bgcolor boxshadow">
                    <h1>About Me</h1>
                    <p className='mt-3'>
                        Hello! I'm Vincent, a proud graduate of the Full Stack Web Development program of the University of Miami as well as an FIU Alumni with an bachelor's in International Relations.
                    </p>
                    <p className='mt-3'>
                        I am a full stack engineer with a strong proficiency in Typescript, JavaScript, HTML, and CSS, and a primary focus on the MERN stack. My expertise lies in building scalable and efficient web applications using the React JavaScript framework for the frontend and either MongoDB or MySQL with Node.js for the backend.
                        I am skilled in a wide variety of NPM tools and packages, which allows me to develop robust and feature-rich applications.

                    </p>
                    <p className='mt-3'>
                        I am a solution-oriented software engineer who enjoys working on challenging projects. I am driven by a desire to create efficient and user-friendly applications, and I am always exploring new technologies and techniques. My strong focus on collaboration and communication ensures that my work meets the needs of my clients and users.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;