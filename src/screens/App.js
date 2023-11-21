import '../styles/App.css'

// Global
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

// Home
import Home from '../components/home/Home'
import Categories from '../components/home/Categories'
import About from '../components/home/About'


import InstaFeed from '../components/InstaFeed'

// Shop
import Shop from '../components/shop/Shop'

import { useState } from 'react'

/* Single-Page-Application Design  */
const App = () => {

    const [selectedPage, setSelectedPage] = useState('HOME')

    const [isChatOpen, setChatOpen] = useState(false)

    return (
        <div className='app'>

            <NavBar isChatOpen={isChatOpen} selected={selectedPage} setSelected={setSelectedPage} />

            {(() => {
                switch (selectedPage) {
                    case 'SHOP':
                        return <Shop />
                    default:
                        return <div className={"landing" + (isChatOpen ? ' blur' : '')}>
                            <Home />
                            <Categories />
                            <InstaFeed />
                            <About />
                        </div>
                }
            })()}

            <Contact opened={isChatOpen} setOpen={setChatOpen} />

            <Footer />
        </div>
    )
}

export default App