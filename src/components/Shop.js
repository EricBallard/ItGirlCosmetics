import '../styles/Shop.css'

import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";


import { useState } from 'react'

const CATEGORIES = [
    'Face', 'Lips', 'Eyes', 'Body'
]

const Shop = () => {

    const [isOptionsOpen, setOptionsOpen] = useState(false)

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
                            <h4>PRICE</h4>
                        </div>

                        <div className="filter-sub category">

                            {CATEGORIES.map(category => {
                                return (
                                    <div className="filter-option-category">
                                        <input type="checkbox" id={category} name={category} defaultChecked />
                                        <div className="cbox-lbl-wrapper">
                                            <label for={category}>{category}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="filter-sub">
                            <div className="range-holder">
                                <input type="range" className='price-range' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={"item-list" + (isOptionsOpen ? ' inactive' : '')}>
                    <div className="item" />
                    <div className="item" />

                    items
                </div>

            </div>
        </div>
    )
}

export default Shop