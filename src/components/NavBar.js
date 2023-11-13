import '../styles/NavBar.css'

import { useState } from 'react';

const NAV_OPTIONS = [
    'HOME',
    'ABOUT',
    'LIPS',
    'SKIN',
    'EYES',
    'BODY',
    'CONTACT'
]

const NavBar = () => {

    // Selected Page 
    const [selected, setSelected] = useState('HOME')

    return (

        <div className='navbar'>

            <div className='title-holder'>

                <h1 className='title'>IT GIRL COSMETICS</h1>


                <h2 className='sub-text'>APPLY 10% OFF TO ALL PRODUCTS WITH PROMO CODE "MAGIC" AT CHECKOUT!</h2>
            </div>

            <div className="nav">

                {NAV_OPTIONS.map(page => {
                    return (
                        <div className={'nav-option' + (selected === page ? ' selected' : '')} key={page}>
                            {page}
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default NavBar;