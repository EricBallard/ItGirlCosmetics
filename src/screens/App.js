import '../styles/App.css'

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Categories from '../components/Categories'
import About from '../components/About'
import InstaFeed from '../components/InstaFeed'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer'

import { useState } from 'react'

/* Single-Page-Application Design  */
const App = () => {

    const [isChatOpen, setChatOpen] = useState(false)

    return (
        <div className='app'>

            <NavBar isChatOpen={isChatOpen}/>


            <div className={"landing" + (isChatOpen ? ' blur' : '')}>
                <Home />
                <Categories />
                <InstaFeed />
                <About />
                <Footer />
            </div>

            <Contact opened={isChatOpen} setOpen={setChatOpen} />

        </div>
    )
}

export default App