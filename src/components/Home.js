import '../styles/Home.css'

import React, { useRef, useEffect } from "react"

const Home = () => {

    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })

    return (
        <div className='home'>
            <img className='logo' alt='logo' src='/logo.png' />

            <div className="video-holder">
                <video  className='video' ref={videoRef}
                    loop
                    autoPlay
                    muted
                    playsInline>
                    <source src='/model_compressed.mp4' type="video/mp4" />Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )

}

export default Home