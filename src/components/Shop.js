import '../styles/Shop.css'

import { BsSearch } from "react-icons/bs";


const CATEGORIES = [
    'face', 'body', 'lips', 'eyes'
]

const Shop = () => {

    return (
        <div className="shop">

            <div className="filter-holder">


                <div className="category-holder">

                    <div className="categories">

                        {CATEGORIES.map(type => {
                            return (
                                <div className="filter" key={type}>

                                    <img alt='Filter Icon' src={`/images/${type}-light-icon.png`}></img>

                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className="search-holder">
                    <input type='text'></input>

                    <BsSearch className='search-icon' />

                </div>
            </div>


        </div>
    )
}

export default Shop