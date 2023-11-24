import '../styles/App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Global
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'

// Footer
import Footer from '../components/footer/Footer'
import Policy from '../components/footer/Policy'

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


            <Router>
                <NavBar isChatOpen={isChatOpen} selected={selectedPage} setSelected={setSelectedPage} />


                {/* Wrap your routes with the Router component */}
                <Switch>
                    {/* Define your routes using the Route component */}
                    <Route path="/shop">
                        <Shop />
                    </Route>

                    <Route path={['/item-policy', '/email-privacy-policy']}>
                        <Policy />
                    </Route>

                    <Route path="/">
                        <div className={"landing" + (isChatOpen ? ' blur' : '')}>
                            <Home />
                            <Categories />
                            {/* <InstaFeed /> */}
                            <About />
                        </div>
                    </Route>

                </Switch>

                <Contact opened={isChatOpen} setOpen={setChatOpen} />

                <Footer />
            </Router>



        </div >
    )
}

export default App