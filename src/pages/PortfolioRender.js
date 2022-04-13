import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { Fragment } from 'react/cjs/react.production.min'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'

export default function PortfolioRender() {
    return (
        <Fragment>
            <Navbar />
            <Banner />
            <AboutSection />
            <ProjectSection />
        </Fragment>

    )
}

