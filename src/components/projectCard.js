import React from 'react';
import '../App.css'
import projectArr from './ProjectContext';

// import array of project data

function ProjectCard() {

    console.log(projectArr)

    return (
        <div className="container d-flex flex-wrap justify-content-around">
            <div className='row'>
                {projectArr.map((project) => (
                    <div className="col-lg-4 my-3">
                        <div className="card shadow-sm text-dark">
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <img src={project.image} className="card-img-top mb-3" alt="..." />
                                <p>
                                    {project.desc}
                                </p>
                                {(project.demo && (<div>
                                    <p>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Video Demo</a>
                                    </p>
                                </div>))}
                                <small className="text-muted">{project.tech}</small>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            <i className="bi bi-laptop"></i>
                                            <a href={project.deploy}
                                            >View project</a
                                            >
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            <i className="bi bi-github"></i>
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
            </div>
        </div >
    )
}

export default ProjectCard;