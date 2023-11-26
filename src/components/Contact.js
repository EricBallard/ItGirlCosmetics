import '../styles/Contact.css'

import { HiOutlineChatAlt2, HiOutlineChevronDoubleDown } from "react-icons/hi";
const Contact = ({ opened, setOpen, show }) => {

    return (
        <div className="contact">

            <div className={"toggle-holder" + (opened ? ' open' : show ? '' : ' hidden')}>
                <div className="toggle" onClick={e => {
                    e.preventDefault()

                    if (opened) {
                        document.documentElement.style.setProperty('overflow-y', 'auto');
                        setOpen(false)
                    } else {
                        document.documentElement.style.setProperty('overflow-y', 'hidden');
                        setOpen(true)
                    }
                }}>
                    {opened ? <HiOutlineChevronDoubleDown /> : <HiOutlineChatAlt2 />}
                </div>
            </div>

            <div className={'form-holder' + (opened ? ' open' : '')}>
                <form className='form'>

                    <label >EMAIL</label>
                    <input type="email" defaultValue='Enter your email'/>

                    <label>MESSAGE</label>
                    <textarea defaultValue='Enter your message'/>

                    <input type="submit" className='submit' />
                </form>
            </div>

        </div>
    )
}

export default Contact