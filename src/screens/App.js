import '../styles/App.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Landing
import Home from '../components/Home'
import Categories from '../components/Categories'
import About from '../components/About'
import InstaFeed from '../components/InstaFeed'
import Contact from '../components/Contact'

// Shop
import Shop from '../components/Shop'

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