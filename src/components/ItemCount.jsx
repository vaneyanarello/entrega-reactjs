import {useState} from 'react'

const ItemCount = ({stock}) => {
    
    const [count, setCount]=useState(1)

    const sumar = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div>
            <button className='btn card-button' onClick={restar}> - </button>
            <span>{count}</span>
            <button className='btn card-button' onClick={sumar}> + </button>
        </div>        
    )
}

export default ItemCount