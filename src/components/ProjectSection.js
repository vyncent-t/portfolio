import ProjectCard from "./ProjectCard";
import projectArr from './ProjectContext';



function ProjectSection() {



    return (
        <section className="my-4">
            <div className="container my-4">
                <div id="projects" class=" d-flex flex-column justify-content-center align-items-center m-4 p-4 text-white rounded-3 ">
                    <h2>My projects</h2>
                    <p>
                        I take pride in my ability to transform ideas into reality through the creation of engaging and innovative projects. Building applications from scratch and launching them into the world is what keeps me motivated as a developer. With each new project, I embrace the opportunity to experiment with new methods and technologies and push myself to continuously improve. Explore some of the projects I've built from conception to deployment.
                    </p>
                    <p>
                        From ideation to execution, I've built a range of functional applications, and I'm currently working on even more exciting projects. Check out some of my past and present work!
                    </p>
                </div>
                <div className="container d-flex flex-row justify-content-around">
                    <ProjectCard projectContext={projectArr} />
                </div>
            </div>
        </section>

    )
}

export default ProjectSection