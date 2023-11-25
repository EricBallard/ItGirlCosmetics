import '../../styles/home/Categories.css'


const OPTIONS = [
    'skin',
    'lips',
    'eyes',
    'body'
]

const Categories = ({hidden}) => {

    return (
        <div className={"categories" + (hidden ? ' hidden' : '')}>

            {OPTIONS.map(option => {
                return (
                    <div key={option} className={"option" + (
                        option === 'skin' || option === 'eyes' ? ' odd'
                            : option === 'lips' && window.innerWidth >= 1000 ? ' odd' : ''
                    )} >

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