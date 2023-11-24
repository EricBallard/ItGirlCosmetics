import '../../styles/shop/Shop.css'

import { useState } from 'react'
import ShopItem from './ShopItem'

import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";


const CATEGORIES = [
    'Face', 'Lips', 'Eyes', 'Body'
]

const Shop = () => {

    const [isOptionsOpen, setOptionsOpen] = useState(false)

    const [maxPrice, setMaxPrice] = useState(30)

    const handleCheckboxToggle = (category) => {
        const checkbox = document.getElementById(category);
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
        }
    };

    return (
        <div className="shop">

            <div className="filter-holder">

                <div className="ftoggle-holder">
                    <div className="ftoggle" onClick={() => setOptionsOpen(!isOptionsOpen)}>
                        <IoFilter className='filter-icon' />
                    </div>
                </div>

                <div className="search-holder">
                    <input type='text' />

                    <BsSearch className='search-icon' />

                </div>
            </div>

            <div className="item-holder">
                <div className={"filter-options-holder" + (isOptionsOpen ? ' active' : '')}>
                    <div className="filter-types">
                        <div className="filter-title">
                            <h4 >CATEGORY</h4>
                        </div>

                        <div className="filter-title">
                            <h4>MAX PRICE</h4>
                        </div>

                        <div className="filter-sub category">

                            {CATEGORIES.map(category => {
                                return (
                                    <div
                                        className="filter-option-category"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleCheckboxToggle(category)}
                                        key={category}
                                    >

                                        <div className="checkbox-wrapper">
                                            <input type="checkbox" id={category} name={category} defaultChecked />
                                            <span className='input-check' />
                                        </div>


                                        <div className="cbox-lbl-wrapper">
                                            <label htmlFor={category}>{category}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="filter-sub">
                            <div className="range-holder price">
                                <input id='price-range' type="range" className='price-range' min='1' max='30' defaultValue='30'
                                    onInput={e => setMaxPrice(e.target.value)} />

                                <div className="price-range-holder">

                                    <label htmlFor='price-range' style={{
                                        width: '50px'
                                    }}>${maxPrice == 30 ? '30+' : maxPrice}</label>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={"item-list" + (isOptionsOpen ? ' inactive' : '')}>

                    <ShopItem />

                </div>

            </div>
        </div>
    )
}

export default Shop