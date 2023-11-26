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

const MAX_ITEMS = SHOP_ITEMS.length

const ShopItem = () => {

    const rootRef = useRef(undefined);

    const [pos, setPos] = useState(0)

    const [width, setWidth] = useState(0)

    const [index, setIndex] = useState(0)

    const [endPoint, setEndPoint] = useState(-1)

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

                <div className="carousel-wrapper" style={{
                    left: pos,
                    width: width * SHOP_ITEMS.length + 'px'
                }}>

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

                <div className="item-bg-wrapper" style={{
                    width: width
                }}>
                    <img src={SHOP_ITEMS[index].img_url} alt="shop-item" className={'item-img-bg'} />
                </div>

                <IoIosArrowBack className='prev-item' onClick={() => {
                    if (index === 0) return
                    else if (index - 1 === 0) {
                        // Hiden left arrow at start of index
                        setEndPoint(-1)
                    } else {
                        setEndPoint(0)
                    }

                    setIndex(index - 1)
                    setPos(pos + width)
                }} style={{
                    visibility: (endPoint === -1 ? 'hidden' : 'visible')
                }} />

                <IoIosArrowForward className='next-item' onClick={() => {
                    if (index + 1 === MAX_ITEMS) return
                    else if (index + 1 === MAX_ITEMS - 1) {
                        setEndPoint(1)
                    } else {
                        setEndPoint(0)
                    }

                    setIndex(index + 1)
                    setPos(pos - width)

                }} style={{
                    visibility: (endPoint === 1 ? 'hidden' : 'visible')
                }} />

            </div>

            <button>ADD TO CART</button>

        </div>
    )
}

export default ShopItem