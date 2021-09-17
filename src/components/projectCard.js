import React from 'react';
import '../App.css'
import projectArr from './ProjectContext';

// import array of project data

function ProjectCard() {

    console.log(projectArr)

    return (
        <div class="container d-flex">
            {projectArr.map((project) => (
                <div class="col m-2">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <img src={project.image} class="img-thumbnail" alt="..." />
                            <h1 class="fw-light">{project.title}</h1>
                            <p class="card-text">
                                {project.desc}
                            </p>
                            <div class="mb-2">
                                <small class="text-muted">{project.tech}</small>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <i class="bi bi-laptop"></i>
                                        <a href={project.deploy}
                                        >View project</a
                                        >
                                    </button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <i class="bi bi-github"></i>
                                        <a href={project.repo}
                                        >Github</a
                                        >
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ProjectCard;