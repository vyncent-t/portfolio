import React from 'react';
import '../App.css'
import avatar from '../../src/images/avatar.jpg'

function AboutMe() {
    return (
        <section id="about" className="container d-flex flex-wrap justify-content-evenly align-items-center my-3 ">
            <div className='col-lg-4 '>
                <img class="avatar" src={avatar} alt="self-portrait" />
            </div>
            <div className=" col-lg-8 p-4 ">
                <div className=" p-4 text-white rounded-3 bgcolor boxshadow">
                    <h1>About Me</h1>
                    <p className='mt-3'>
                        Fullstack MERN developer with strong proficiency in both front-end and back-end development through use of HTML, CSS, and JavaScript with an emphasis on the React JavaScript framework paired with MongoDB, Express.js, Node.js, and a variety of NPM tools/packages. Passionate, self-motivated Software Engineer eager to further enrich current knowledge and master the latest skills and tools needed for cutting edge web development. An analytical thinker with a knack for problem solving, eager to explore new and creative approaches to any challenges. Florida International University Alumni and graduate of University of Miami’s Full Stack Web Development Bootcamp.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;