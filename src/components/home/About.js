import '../../styles/home/About.css'

const About = ({hidden}) => {

    return (
        <div className={"about"+ (hidden ? ' hidden' : '')}>

            <div className="text-holder">
                <p className='text'>
                    <span className='quotes'>"</span>
                    I've carefully curated a collection that embraces inclusivity and self-expression.<wbr/>
                    Explore our range of products designed to redefine beauty standards and celebrate the power of self-love through makeup!
                    <span className='quotes'>"</span>
                </p>
            </div>

            <div className="img-holder">
                <img className='portrait' alt='portrait' src='/images/portrait.png' />

                <div className="name-holder">
                    <p className='name'>- Jae Willis</p>
                    <span className='ceo'>Founder & CEO</span>
                </div>
            </div>


        </div>
    )
}

export default About