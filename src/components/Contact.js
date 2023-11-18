import '../styles/Contact.css'

import { HiOutlineChatAlt2 } from "react-icons/hi";

const Contact = ({ opened, setOpen }) => {

    return (
        <div className="contact">

            <div className={"toggle-holder" + (opened ? ' open' : '')}>
                <div className="toggle" onClick={e => {
                    e.preventDefault()
                    setOpen(!opened)
                }}>
                    <HiOutlineChatAlt2 />
                </div>
            </div>

            <div className={'form-holder' + (opened ? ' open' : '')}>
                <form className='form'>

                    <label >EMAIL</label>
                    <input type="email" />

                    <label>MESSAGE</label>
                    <textarea />

                    <input type="submit" className='submit' />
                </form>
            </div>

        </div>
    )
}

export default Contact