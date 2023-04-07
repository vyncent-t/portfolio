import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProjectSection from '../components/ProjectSection'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

export default function PortfolioRender() {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutMe />
            <ProjectSection />
            <Footer />
        </>
    )
}

