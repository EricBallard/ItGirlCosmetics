import '../styles/App.css'

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Categories from '../components/Categories'
import About from '../components/About'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

/* Single-Page-Application Design  */
const App = () => {

    return (
        <div className='app'>
            <NavBar />
            <Home />
            <Categories />
            <About />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default App