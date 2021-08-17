import React from 'react';
import '../App.css'
import projectArr from './projectContext';

// import array of project data

function ProjectCard() {

    console.log(projectArr)

    return (
        <div class="container d-flex">
            {projectArr.map((project) => (
                <div class="col m-2">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <img src="assets/images/atmossc.jpg" class="img-thumbnail" alt="..." />
                            <h1 class="fw-light">{project.title}</h1>
                            <p class="card-text">
                                {project.desc}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <i class="bi bi-laptop"></i>
                                        <a href="https://vyncent-t.github.io/atmosphere-project/"
                                        >View project</a
                                        >
                                    </button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <i class="bi bi-github"></i>
                                        <a href="https://github.com/vyncent-t/atmosphere-project"
                                        >Github</a
                                        >
                                    </button>
                                </div>
                                <small class="text-muted">HTML, CSS, JavaScript</small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;