import Navbar from './Navbar'
import Banner from './Banner'
import AboutMe from './aboutMe'
import Projects from './ProjectIntro'
import ProjectCard from './ProjectCard'

export default function PortfolioRender() {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutMe />
            <Projects />
            <ProjectCard />
        </div>

    )
}

