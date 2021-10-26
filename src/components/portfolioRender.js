import Navbar from './Navbar'
import Banner from './Banner'
import AboutMe from './aboutMe'
import Projects from './ProjectIntro'
import ProjectCard from './ProjectCard'
import { Fragment } from 'react/cjs/react.production.min'

export default function PortfolioRender() {
    return (
        <Fragment>
            <Navbar />
            <Banner />
            <AboutMe />
            <Projects />
            <ProjectCard />
        </Fragment>

    )
}

