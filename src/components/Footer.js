import '../styles/Footer.css'

const Footer = () => {

    return (
        <div className="footer">

            <p style={{
                cursor: 'default',
                fontWeight: '700',
                color: 'var(--amaranth_purple)'
            }}>It Girl Cosmetics™ 2023</p>

            <p>Email & Privacy <span className='link'>Policy</span></p>

            <p>Refund, Return, & Exchange <span className='link'>Policy</span></p>

            <p >Website made with ♥ by <span className='link'>Eric Ballard</span></p>
        </div>
    )
}

export default Footer