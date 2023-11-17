import '../styles/Socials.css'

import Carousel from 'react-bootstrap/Carousel';

const url = 'https://scontent-ord5-1.cdninstagram.com/o1/v/t16/f1/m84/1F4EC48BCFC815AA52879ADA4056849E_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmZlZWQudW5rbm93bi1DMy43MjAuZGFzaF9iYXNlbGluZV8xX3YxIn0&_nc_ht=scontent-ord5-1.cdninstagram.com&_nc_cat=109&vs=689688729739922_1690396998&_nc_vs=HBksFQIYTGlnX2JhY2tmaWxsX3RpbWVsaW5lX3ZvZC8xRjRFQzQ4QkNGQzgxNUFBNTI4NzlBREE0MDU2ODQ5RV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dDZU84eGFPZ3pLMmJpa0JBTGxUU0JQYUtqcERicGt3QUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrjHraPq%2BoUBFQIoAkMzLBdAIIIMSbpeNRgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&ccb=9-4&oh=00_AfAHETTAtBlVrzSLc3xqaVhsyxJ00UeLqiR7jCoGn8LlMQ&oe=6558186B&_nc_sid=1d576d&_nc_rid=5d91849cc9';

const Socials = () => {

    return (
        <div className='socials'>




            <Carousel>
                <Carousel.Item>
                    <video
                        loop
                        autoPlay
                        muted
                        playsInline>

                        <source src={url} type="video/mp4" />Your browser does not support the video tag.
                    </video>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <video
                        loop
                        autoPlay
                        muted
                        playsInline>

                        <source src={url} type="video/mp4" />Your browser does not support the video tag.
                    </video>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <video
                    fade
                        loop
                        autoPlay
                        muted
                        playsInline>

                        <source src={url} type="video/mp4" />Your browser does not support the video tag.
                    </video>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>

        </div >
    );
}

export default Socials