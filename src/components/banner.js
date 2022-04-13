import React from 'react';
import '../App.css'
import styles from './BannerStyles.module.css'

// Need to link to the banner style mod to use the robo font and animations

function Banner() {
    return (
        <section className={styles.bannertext}>
            <div className={styles.bannerstyle}>
                <h1 >Hello World,</h1>
                <p>I'm Vincent.</p>
                <p>(Full Stack Developer)</p>
                <div className='d-flex justify-content-center'>
                    <div className='socials'>
                        <i className="bi bi-github"></i>
                        <a href="https://github.com/vyncent-t" >Github</a>
                    </div>
                    <div className='socials'>
                        <i className="bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/vincent-taylor-jr/">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;