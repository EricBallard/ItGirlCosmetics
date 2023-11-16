import '../styles/NavBar.css'

import { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

const NAV_OPTIONS = [
    'HOME',
    'SHOP',
    'ABOUT',
    'CONTACT'
]



const NavBar = () => {

    // Selected Page 
    const [selected, setSelected] = useState('HOME')

    const [mobile, setMobile] = useState(window.innerWidth < 900)

    const [isOpen, setOpen] = useState(false)

    const [sticky, setSticky] = useState(false)

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
                            <img className='cart' src='/images/shopping_cart.png' alt='cart' />
                        </div>

                        <div className="menu-control">
                            <Hamburger toggled={isOpen} toggle={() => {

                                if (isOpen) {
                                    document.documentElement.style.setProperty('overflow-y', 'auto');
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