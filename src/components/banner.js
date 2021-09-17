import React from 'react';
import '../App.css'
import styles from './BannerStyles.module.css'

// Need to link to the banner style mod to use the robo font and animations

function Banner() {
    return (
        <main>
            <section>
                <div className="container-fluid bannerphoto">
                    <div className={styles.bannertextA}>
                        <p>Hello World.</p>
                    </div>
                    <div className={styles.bannertextB}>
                        <p>I'm Vincent,</p>
                    </div>
                    <div className={styles.bannertextC}>
                        <p>let's create.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Banner;