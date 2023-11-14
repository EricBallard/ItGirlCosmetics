import '../styles/Categories.css'


const OPTIONS = [
    'skin',
    'lips',
    'eyes',
    'body'
]

const Categories = () => {

    return (
        <div className="categories">

            {OPTIONS.map(option => {
                return (
                    <div className="option" key={option}>
                        <p className='option-text'>
                            SHOP {option.toUpperCase()}
                        </p>

                        <img className='media' src={'/images/' + option + '.jpeg'} alt='category' />

                    </div>
                )
            })}
        </div>
    )
}

export default Categories