import Navbar from '../components/navbar'
import Banner from './banner'
import AboutMe from './aboutMe'
import Projects from './projectIntro'
import ProjectSpace from './projectSpace'

export default function PortfolioRender() {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutMe />
            <Projects />
            <ProjectSpace />
        </div>

    )
}

