import '../styles/App.css'

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Categories from '../components/Categories'

/* Single-Page-Application Design  */
const App = () => {

    return (
        <div className='app'>
            <NavBar />
            <Home />
            <Categories />
        </div>
    )
}

export default App