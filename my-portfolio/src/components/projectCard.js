import React from 'react';
import '../App.css'

// import array of project data

function ProjectCard() {
    // reference the array
    // if array longer than one then map?
    // const projectData = projectDataArray.map((project) => {
    //     <div class="col">
    //         <div class="card shadow-sm">
    //             <div class="card-body">
    //                 <img src=`${project.image}` class="img-thumbnail" alt="..." />
    //                 <h1 class="fw-light">{project.title}</h1>
    //                 <p class="card-text">
    //                     {project.desc}
    //                 </p>
    //                 <div class="d-flex justify-content-between align-items-center">
    //                     <div class="btn-group">
    //                         <button type="button" class="btn btn-sm btn-outline-secondary">
    //                             <i class="bi bi-laptop"></i>
    //                             <a href=`${project.deploy}` target="_blank">View project</a>
    //                         </button>
    //                     <button type="button" class="btn btn-sm btn-outline-secondary">
    //                         <i class="bi bi-github"></i>
    //                         <a href=`${project.repo}` target="_blank"
    //                             >Github</a
    //                             >
    //                         </button>
    //             </div>
    //             <small class="text-muted">{project.tech}</small>
    //         </div>
    //     </div>
    //         </div >
    //     </div >
    // })

    return (
        <div class="col">
            <div class="card shadow-sm">
                <div class="card-body">
                    <img src="assets/images/atmossc.jpg" class="img-thumbnail" alt="..." />
                    <h1 class="fw-light">Atmos</h1>
                    <p class="card-text">
                        Atmos allows a user to choose a genre of music that they are in the mood for
                        along with searching visuals they would like to see. The problem we are trying
                        to solve is to allow the user to create a personalized experience without
                        video editing knowledge or without requiring the use of multiple apps/browsers
                        to achieve the same goal.
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
    )

}