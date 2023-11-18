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
        <div className={'app' + (isChatOpen ? ' blur' : '')}>
            <NavBar />
            <Home />
            <Categories />
            <InstaFeed />
            <About />
            <Footer />

            <Contact opened={isChatOpen} setOpen={setChatOpen} />
        </div>
    )
}

export default App