import '../../styles/Footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {


    return (
        <div className="footer">

            <p style={{
                cursor: 'default',
                fontWeight: '700',
                color: 'var(--amaranth_purple)'
            }}>It Girl Cosmetics™ 2023</p>

            <p>Email & Privacy <Link className='link' to='/email-privacy-policy'>Policy</Link></p>

            <p>Refund, Return, & Exchange <Link className='link' to='/item-policy'>Policy</Link></p>

            <p >Website made with ♥ by <a className='link' href='https://github.com/ericballard'>Eric Ballard</a></p>
        </div>
    )
}

export default Footer