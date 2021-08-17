import React from 'react';
import '../App.css'
import ProjectCard from './projectCard';

function ProjectSpace() {
    return (
        <section>
            <div class="album py-5">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/*  need to make cards */}
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProjectSpace;