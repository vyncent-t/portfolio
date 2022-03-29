import ProjectCard from "./ProjectCard";



function ProjectSection() {



    return (
        <section className="my-4">
            <div className="container my-4">
                <div id="projects" class="m-4 p-4 text-white rounded-3 bgcolor">
                    <h2>My projects</h2>
                    <p>
                        I pride myself on my ability to take an idea from an inspired thought to the whiteboard and then finally from my screen and on to yours!

                        Being able to create new and engaging projects for myself and others and building them from the ground up is what keeps me motivated.

                        I believe within each project is an opportunity to experiment and learn new methods and technologies to further sharpen my skills not only as a developer but as a creative.
                    </p>
                    <p>
                        Below are some prime examples of projects i've taken from their conception in my own imagination to a functional application out on the internet!
                    </p>
                    <ProjectCard />
                </div>
            </div>
        </section>

    )
}

export default ProjectSection