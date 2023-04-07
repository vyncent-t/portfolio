import React from 'react';

// import array of project data

function ProjectCard(props) {
    const projectArr = props.projectContext;


    return (
        <div >
            {projectArr.map((project) => (
                <div className="container my-3 card shadow-sm text-dark">
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <img src={project.image} className="card-img-top mb-3" alt="..." />
                            </div>

                            <div className='col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                                <h3 className="card-title">{project.title}</h3>
                                <p className='text-muted'>
                                    {project.nature}
                                </p>
                                <p>
                                    {project.desc}
                                </p>
                                <p className='text-muted'>
                                    {project.note}
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
                                            <a href={project.website}
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
                </div>
            ))
            }
        </div >
    )
}

export default ProjectCard;