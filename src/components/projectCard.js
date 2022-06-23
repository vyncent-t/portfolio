import React from 'react';
import '../App.css'
import { useEffect, useState } from "react"
import projectArr from './ProjectContext';
import YouTube from "react-youtube"
import styles from './ProjectCardStyles.module.css'
var getYouTubeID = require('get-youtube-id')



// import array of project data

function ProjectCard() {

    console.log(projectArr)


    const [watchDemo, setWatchDemo] = useState(false)
    const [watchProject, setWatchProject] = useState(null)

    function watchProjectOn(event) {
        setWatchDemo(true)
        setWatchProject(event.target.value)
    }


    function watchProjectOff() {
        setWatchDemo(false)
        setWatchProject(null)
    }



    const [youtubeWidth, setYoutubeWidth] = useState((document.documentElement.clientWidth - 200))
    const [youtubeHeight, setYoutubeHeight] = useState((document.documentElement.clientHeight - 200))



    function getWindowsDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        setYoutubeWidth((width - 400))
        setYoutubeHeight((height - 400))
        return {
            width,
            height
        }
    }


    useEffect(() => {
        function handleResize() {
            getWindowsDimensions(getWindowsDimensions())
        }

        window.addEventListener('resize', handleResize)
        console.log(`youtube size ${youtubeWidth} x ${youtubeHeight}`)

        return () => window.removeEventListener('resize', handleResize)
    }, [youtubeWidth, youtubeHeight])



    function onReady(e) {
        // access to player in all event handlers via event.target
        e.target.playVideo();
        e.target.setVolume(40)
    }


    console.log("window size " + document.documentElement.clientWidth)
    console.log("window size " + document.documentElement.clientHeight)


    const opts = {
        // height: 500,
        // width: 900,
        height: `${youtubeHeight}`,
        width: `${youtubeWidth}`,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            setVolume: 50
        },
    }




    return (
        <div className="justify-content-around">
            <div className='d-flex flex-column'>
                {projectArr.map((project) => (
                    <div className=" col-lg-auto my-3">
                        <div className="card shadow-sm text-dark">
                            <div className="card-body boxshadow">
                                <div className='d-flex flex-lg-row flex-sm-column  flex-xs-column '>
                                    <div className='d-flex flex-column justify-content-center p-2 col-lg-8'>
                                        {(watchDemo === true && watchProject === project.title) ? (
                                            <div className={styles.videobox}>
                                                <YouTube videoId={getYouTubeID(project.demo)} opts={opts} onReady={onReady} />
                                                <div>
                                                    <button className="btn btn-primary" onClick={watchProjectOff}>Close Video</button>
                                                </div>
                                            </div>

                                        ) : (
                                            <div>
                                                <img src={project.image} className="card-img-top mb-3 boxshadow" alt="..." />
                                                <small>{project.tech}</small>
                                            </div>
                                        )}

                                        {(project.demo && (<div>
                                            {(watchDemo && watchProject === project.title) ? (
                                                (<div>
                                                    {/* <button className="btn btn-primary" onClick={watchProjectOff}>Close Video</button> */}
                                                </div>)
                                            ) : <div>
                                                <button value={project.title} className="btn btn-primary" onClick={watchProjectOn}>Watch Demo</button>
                                            </div>}
                                        </div>))}
                                    </div>

                                    <div className=' d-flex flex-column justify-content-center m-2 p-2 col-lg-4'>
                                        <h3 className="card-title">{project.title}</h3>
                                        <div>
                                            <p>{project.desc}</p>
                                        </div>
                                        <div>
                                            <p className='text-muted'>{project.note}</p>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm ">
                                                    <i className="bi bi-laptop"></i>
                                                    <a href={project.deploy} target="_blank" rel="noreferrer"
                                                    >View project</a
                                                    >
                                                </button>
                                                <button type="button" className="btn btn-sm ">
                                                    <i className="bi bi-github"></i>
                                                    <a href={project.repo} target="_blank" rel="noreferrer"
                                                    >Github</a
                                                    >
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}

export default ProjectCard;