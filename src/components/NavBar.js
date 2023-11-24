import '../styles/NavBar.css'


import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Sling as Hamburger } from 'hamburger-react'

import { HiShoppingCart } from "react-icons/hi";


const NAV_OPTIONS = [
    'HOME',
    'SHOP',
    'CHECKOUT',
    'APPOINTMENTS'
]

const NavBar = ({ isChatOpen, selected, setSelected }) => {

    const [mobile, setMobile] = useState(window.innerWidth < 900)

    const [isOpen, setOpen] = useState(false)

    const [sticky, setSticky] = useState(false)

    const selectPage = (page) => {
        setSelected(page)
        setOpen(false)
    }

    /* Dynamical nav bar (Mobile/Desktop) */
    useEffect(() => {
        const resizeWindow = (e) => {
            e.preventDefault()
            setMobile(window.innerWidth < 900)
        }

        const scrollWindow = (e) => {
            e.preventDefault()
            setSticky(window.scrollY >= 75)
        }

        window.addEventListener("resize", resizeWindow);
        window.addEventListener("scroll", scrollWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
            window.removeEventListener("scroll", scrollWindow);
        }
    }, [])

    return (

        <div className={mobile ? 'mobile-navbar' : 'navbar'}>

            <div className='title-holder'>

                <h1 className='title'>IT GIRL COSMETICS</h1>


                <h2 className='sub-text'>10% OFF WITH <wbr />PROMO CODE "MAGIC" AT CHECKOUT!</h2>
            </div>

            <div className={(mobile ? 'mobile-nav' : 'nav') + (sticky ? ' sticky' : '') + (isOpen ? ' opened' : '')}>

                {/* (MOBILE) Hamburger Menu */}
                {mobile ?
                    <div className="mobile-menu">

                        <div className="shopping-cart">
                            <div className="item-count">0</div>

                            <HiShoppingCart className='cart' />
                        </div>

                        <div className="menu-control">
                            <Hamburger toggled={isOpen} toggle={() => {

                                if (isOpen) {
                                    if (!isChatOpen) {
                                        document.documentElement.style.setProperty('overflow-y', 'auto');
                                    }
                                    setOpen(false)
                                } else {
                                    document.documentElement.style.setProperty('overflow-y', 'hidden');
                                    setOpen(true)
                                }
                            }} rounded size={32}
                                color='#E8F0FF'
                            />
                        </div>


                        <div className="mobile-options">
                            {/* Map Page Options */}
                            {NAV_OPTIONS.map(page => {
                                return (
                                    <Link className={
                                        'mobile-nav-option' + (isOpen ? '' : ' hidden') + (selected === page ? ' selected' : '')
                                    } key={page} to={`/${page.toLocaleLowerCase()}`} onClick={() => selectPage(page)} style={{
                                        textDecoration: (page === 'APPOINTMENTS' ? 'line-through' : 'none')
                                    }}>
                                        {page}
                                    </Link>
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
                            } key={page} onClick={() => selectPage(page)}>

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