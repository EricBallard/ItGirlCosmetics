import '../styles/App.css'

import NavBar from '../components/NavBar'
import Home from '../components/Home'

/* Single-Page-Application Design  */
const App = () => {

    return (
        <div className='app'>
            <NavBar />

            <Home />
        </div>
    )
}

export default App