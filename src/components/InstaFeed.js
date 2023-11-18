import '../styles/InstaFeed.css'

import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

// TODO - Serve from backend
const USER_ID = '6782349035148227'
const ACCESS_TOKEN = 'IGQWROaGxMSXBhMEE5c19WRnNjRWRNdXB4NTdfcnhiZAXUxUmpfZA2tpV090T1ZAPakxmZAnZA0ZAXItYVAxckFXODBVcXViWjFUOTc0VTJTRkZA2eXFySFJZAc3lZANVNmdkg1cXhVZATJpWlRqUXJaSjZAITWZAQck1fNHNIblUZD'

// Instagram content
const Content = class {
    /* TYPES
   0="video/mp4"
   1="image/jpg"
   */
    constructor(type, url) {
        this.type = type
        this.url = url
    }
}

const InstaFeed = () => {

    // Cookie
    const [cookies, setCookie, removeCookie] = useCookies('ig_feed');

    const [instaFeed, setInstaFeed] = useState([])

    const displayMedia = (media_url) => {
        // Determine type
        let type = 2;

        if (media_url.includes('.mp4')) {
            type = 0;
        } else if (media_url.includes('.jpg')) {
            type = 1;
        } else {
            // Album TODO
        }

        // Supply to JSX
        setInstaFeed(prevArray => [...prevArray, new Content(type, media_url)]);

    }

    const getMedia = (id) => {
        console.log('[API] Loading media.. ' + id)
        fetch(`https://graph.instagram.com/${id}?access_token=${ACCESS_TOKEN}&fields=media_url`, { method: 'GET', })
            .then(res => res.json()).then(res => {
                if (res && res.media_url) {
                    // Provide URL to display media & check type .jpg / .mp4
                    displayMedia(res.media_url)

                    // Store URL in local storage
                    window.localStorage.setItem(id, res.media_url)
                } else {
                    throw Error('Invalid response or data!')
                }
            }).catch(err => console.error(err))
    }

    /* Load recent feed from Cache/API */
    useEffect(() => {
        // Check if cookie exist
        const cache = cookies.ig_feed

        if (cache) {
            for (let post of cache) {
                // Check if media exist in localStorage
                const cachedMediaUrl = window.localStorage.getItem(post.id)

                if (cachedMediaUrl) {
                    // Provide URL to display media & check type .jpg / .mp4
                    displayMedia(cachedMediaUrl)
                } else {
                    console.error('Failed to load cached media: ' + cache)
                }
            }
        } else {
            // Not available - query Meta API
            console.log('[API] Querying META for latest feed...')

            fetch(`https://graph.instagram.com/${USER_ID}/media?access_token=${ACCESS_TOKEN}`, { method: 'GET', })
                .then(res => res.json()).then(res => {
                    if (res && res.data && Array.isArray(res.data)) {
                        // 0: {id: '17874187366122905'}
                        const user_post_ids = res.data.slice(0, 3)

                        // Re-query the API for each content ID's media, save {ID, URL} in local_storage
                        for (let post of user_post_ids) {
                            getMedia(post.id)
                        }

                        // Cache result
                        setCookie('ig_feed', user_post_ids, { maxAge: 86400 })
                    } else {
                        throw Error('Invalid respone or data.');
                    }
                }).catch(err => console.error(err))
        }
    }, []) // Run once

    return (
        <div className='instaFeed'>


            {instaFeed ? instaFeed.map(content => {

                return (
                    <div className="content" key={instaFeed.indexOf(content)}>
                        {content.type === 0 ?
                            <video
                                loop
                                muted
                                playsInline>
                                <source src={content.url} type="video/mp4" />Your browser does not support the video tag.
                            </video>
                            :
                            <img src={content.url} alt='Instagram Feed @ItGirlCosmetics.co' />}
                    </div>
                )
            }) : undefined}

        </div >
    );
}

export default InstaFeed