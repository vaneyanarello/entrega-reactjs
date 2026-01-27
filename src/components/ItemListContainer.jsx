import '../assets/styles/ItemListContainer.css'

const ItemListContainer = (props) =>{
    return(
        <div>
            <h1 className='mensaje-inicio'>{props.mensaje}</h1>
        </div>
    )
}

export default ItemListContainer