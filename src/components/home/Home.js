import '../../styles/home/Home.css'

import React, { useRef, useState, useEffect } from "react"

const Home = ({ showMore, setShowMore }) => {

    const rootRef = useRef(undefined)

    const videoRef = useRef(undefined);

    const [introAnim, setIntroAnim] = useState('')

    const [swipeAnim, setSwipeAnim] = useState('')

    const [swipeImg, setImg] = useState('/images/touch-down.png')

    useEffect(() => {
        // Mute video by default for browser to allow autoplay
        videoRef.current.defaultMuted = true

        setIntroAnim(' visible')

        let timeoutID = undefined

        const playSwipeAnim = (initDelay) => {
            timeoutID = setTimeout(() => {
                setSwipeAnim(' visible')

                timeoutID = setTimeout(() => {
                    setImg('/images/touch-swipe.png')

                    timeoutID = setTimeout(() => {
                        setSwipeAnim(' reset')

                        timeoutID = setTimeout(() => {
                            setImg('/images/touch-down.png')
                            playSwipeAnim(1000)
                        }, 1000)
                    }, 3000)
                }, 2000)
            }, initDelay);
        }

        playSwipeAnim(2000)


        const scrollWindow = () => {
            console.log(window.scrollY)
            // Is home div scrolled at least half way up
            if (window.scrollY >= rootRef.current.offsetHeight / 4) {
                setShowMore(true)

                // Stop swipe anim
                clearTimeout(timeoutID)

                // Hide div

            }
        }

        window.addEventListener("scroll", scrollWindow);

        return () => {
            clearTimeout(timeoutID)
            window.removeEventListener('scroll', scrollWindow)
        }
    }, [])


    return (
        <div className='home' ref={rootRef}>
            <div className='logo-holder'>
                <img className={'logo' + introAnim} alt='logo' src='/logo.png' />
            </div>

            <div className={"video-holder" + introAnim}>
                <video className='video' ref={videoRef}
                    loop
                    autoPlay
                    muted
                    playsInline>
                    <source src='/model.mp4' type="video/mp4" />Your browser does not support the video tag.
                </video>
            </div>

            <div className={"show-more" + introAnim} style={{
                height: (showMore ? '0vh' : '15vh')
            }}>
                {!showMore ? <img alt='Swipe Up' src={swipeImg} className={'swipe-img' + swipeAnim} /> : undefined}

            </div>
        </div>
    )

}

export default Home