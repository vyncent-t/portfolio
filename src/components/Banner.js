import React from 'react';
import styles from './BannerStyles.module.css'

// Need to link to the banner style mod to use the robo font and animations


function Banner() {
    return (
        <section className={styles.bannertext}>
            <div className={styles.bannerstyle}>
                <div className='d-flex flex-column justify-content-center  align-items-center'>
                    <h1 >Hello World,</h1>
                    <p>I'm Vincent.</p>
                    <p>Software Engineer</p>
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-center'>
                    <div className={styles.bannersocials}>
                        <i className="bi bi-github"></i>
                        <a href="https://github.com/vyncent-t" >Github</a>
                    </div>
                    <div className={styles.bannersocials}>
                        <i className="bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/vincent-taylor-jr/">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;