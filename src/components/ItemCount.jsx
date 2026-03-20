import {useState} from 'react'

const ItemCount = (props) => {
    
    const [count, setCount]=useState(1)

    const sumar = ()=>{
        if(count < props.stock){
            setCount(count + 1)
        }
    }

    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const shop = ()=> {
        props.onAdd(count)
    }

    return(
        <div>
            <button className='btn card-button' onClick={restar}> - </button>
            <span>{count}</span>
            <button className='btn card-button' onClick={sumar}> + </button>
            <button className='btn card-button' variant="primary" onClick={shop} disabled={count === 0 || stock === 0}>Agregar al carrito</button>
        </div>        
    )
}

export default ItemCount