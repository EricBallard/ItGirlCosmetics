import '../../styles/shop/ShopItem.css'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

import { useState, useRef, useEffect } from 'react'

const Item = class {
    /* CATEGORY
        0=Face
        1=Lips
        2=Eyes
        3=Body
    */
    constructor(name, img_url, category, price) {
        this.name = name
        this.img_url = img_url
        this.category = category
        this.price = price
    }
}

const SHOP_ITEMS = [

    // FACE
    new Item('It Girl Cleansing Oil', '/images/shop/oil.jpeg', 0, 10.00),
    new Item('Cleansing Cream', '/images/shop/cream.jpeg', 0, 15.00),
    new Item('Handheld Cleansing Brush', '/images/shop/brush.jpeg', 0, 9.00),

    // LIPS
    new Item('Diamond Girl Gloss', '/images/shop/gloss.jpeg', 1, 10.00),
    new Item('Star Girl Glitter Gloss', '/images/shop/gloss.jpeg', 1, 8.50),
    new Item('Plumping Lip Oil', '/images/shop/oil.jpeg', 1, 8.00),
    new Item('It Girl Double Sided Lip Scrub/Mask', '/images/shop/cream.jpeg', 1, 12.00),
    new Item('Sweet Gal Lip Liner', '/images/shop/liner.jpeg', 1, 6.00),
    new Item('Flower Girl Lip Balm', '/images/shop/balm.jpeg', 1, 12.00),

    // BODY
    new Item('Butter Cream Body Butter', '/images/shop/cream.jpeg', 0, 21.00),

    // EYES
    new Item('Voluminous Glam Mascara', '/images/shop/mascara.jpeg', 0, 12.00),

]

const ShopItem = () => {

    const rootRef = useRef(undefined);

    const [index, setIndex] = useState(0)

    /* Slider State
        -1=Moving left
        0=Center
        1=Moving right, from center
        2=Move center, from right
    */
    const [tally, setTally] = useState(0)

    const [pos, setPos] = useState('4%')


    const [width, setWidth] = useState(0)


    useEffect(() => {
        const handleResize = () => {
            setWidth(rootRef.current.offsetWidth)
            console.log('Width: ' + width)
        }

        setWidth(rootRef.current.offsetWidth)
        window.addEventListener('resize', handleResize)

        console.log('Width: ' + width)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])


    return (
        <div className="shop-item" ref={rootRef}>

            <div className="item-title">
                <h3>{'$' + SHOP_ITEMS[index].price + ' - ' + SHOP_ITEMS[index].name}</h3>
            </div>


            <div className="item-img-wrapper">

                {/* <img src={SHOP_ITEMS[index].img_url} alt="shop-item" className={'item-img-bg' + (
                    state !== 0 ? ' blur' : ''
                )} /> */}

                <div className="carousel-wrapper" style={{
                    left: pos,
                    width: width * SHOP_ITEMS.length
                }}>

                    <div className="carousel-items">
                        {SHOP_ITEMS.map(item => {
                            return (
                                <div className="carousel-item-wrapper" key={item.name} style={{
                                    width: width
                                }}>
                                    <img src={item.img_url} alt={item.name}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <IoIosArrowBack className='prev-item' onClick={() => {
                    setPos(`calc(${pos} + ${width})`)
                }} />

                <IoIosArrowForward className='next-item' onClick={() => {

                }} />

            </div>

            <button>ADD TO CART</button>

        </div>
    )
}

export default ShopItem