import React from 'react';
import '../App.css'
import avatar from '../../src/images/avatar.jpg'

function AboutMe() {
    return (
        <section class="container d-flex">
            <div>
                <img class="avatar rounded" src={avatar} alt="" />
            </div>
            <div id="about" class="mt-4 p-4 p-md-5 mb-5 text-white rounded-3 bg-dark aboutme">
                <div>
                    <div>
                        <h1>About Me</h1>
                        <p>
                            Hey! I'm Vincent, a passionate, self-motivated aspiring Software Engineer located in South Florida. I am always eager for opportunities to further enrich current knowledge and master the latest skills and tools needed for cutting edge web development. An analytical thinker with a knack for problem solving, eager to explore new and creative approaches to any challenges. MERN Stack developer with strong proficiency in front-end works of HTML, CSS, and JavaScript with an emphasis on the React JavaScript framework while using Node js and a wide variety of NPM tools/packages. Completed a Certificate in Full Stack Web Development at the University of Miami. Excited to apply honed skills in creating user-friendly interfaces while onboard your team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;