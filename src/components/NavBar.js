import '../styles/NavBar.css'

import { useState, useEffect, useRef } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
const NAV_OPTIONS = [
    'HOME',
    'SKIN',
    'LIPS',
    'EYES',
    'BODY',
    'ABOUT',
    'CONTACT'
]



const NavBar = () => {

    // Selected Page 
    const [selected, setSelected] = useState('HOME')

    const [mobile, setMobile] = useState(window.innerWidth < 900)

    const [isOpen, setOpen] = useState(false)

    /* Dynamical nav bar (Mobile/Desktop) */
    useEffect(() => {
        const resizeWindow = (e) => {
            e.preventDefault()
            setMobile(window.innerWidth < 900)
        }

        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
        }
    }, [])

    return (

        <div className={mobile ? 'mobile-navbar' : 'navbar'}>

            <div className='title-holder'>

                <h1 className='title'>IT GIRL COSMETICS</h1>


                <h2 className='sub-text'>10% OFF WITH <wbr />PROMO CODE "MAGIC" AT CHECKOUT!</h2>
            </div>

            <div className={(mobile ? 'mobile-nav' : 'nav') + (isOpen ? ' opened' : '')}>

                {/* (MOBILE) Hamburger Menu */}
                {mobile ?
                    <div className="mobile-menu">

                        <div className="menu-control">
                            <Hamburger toggled={isOpen} toggle={() => {
                                setOpen(!isOpen)
                            }} rounded size={32}
                                color='#E8F0FF'
                            />
                        </div>


                        <div className="mobile-options">
                            {/* Map Page Options */}
                            {NAV_OPTIONS.map(page => {
                                return (
                                    <div className={
                                        'mobile-nav-option' + (isOpen ? '' : ' hidden') + (selected === page ? ' selected' : '')
                                    } key={page}>

                                        {page}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    /* Map Page Options */

                    NAV_OPTIONS.map(page => {
                        return (
                            <div className={
                                'nav-option' + (selected === page ? ' selected' : '')
                            } key={page}>

                                {page}
                            </div>
                        )
                    })

                }


            </div>
        </div>
    )

}

export default NavBar;