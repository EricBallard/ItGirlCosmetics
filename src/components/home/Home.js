import '../../styles/home/Home.css'

import React, { useRef, useEffect } from "react"

const Home = ({ showMore }) => {

    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })

    return (
        <div className='home'>
            <div className="logo-holder">
                <img className='logo' alt='logo' src='/logo.png' />
            </div>

            <div className="video-holder">
                <video className='video' ref={videoRef}
                    loop
                    autoPlay
                    muted
                    playsInline>
                    <source src='/model.mp4' type="video/mp4" />Your browser does not support the video tag.
                </video>
            </div>

            <div className="show-more">

                <img alt='Swipe Up' src='/images/touch-swipe.png' />

                <div className="swipe-txt">
                    <h4>Swipe-up to see more!</h4>
                </div>
            </div>
        </div>
    )

}

export default Home