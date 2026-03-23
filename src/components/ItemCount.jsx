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
        setCount(0)
    }

    return(
        <>
        {
            props.stock > 0
            ?        
        <div style={{display: 'flex', justifyContent:'center', gap:'15px'}}>
            <div><button className='btn' onClick={restar} style={{border: '1px solid #946343'}}> - </button>
            <span> {count} </span>
            <button className='btn' onClick={sumar} style={{border: '1px solid #946343'}}> + </button>
            </div>
            <div>
                <button className='btn card-button' variant="primary" onClick={shop} disabled={count === 0 || props.stock === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
        :<p>Producto sin stock</p>
        }
        </>
)
}

export default ItemCount