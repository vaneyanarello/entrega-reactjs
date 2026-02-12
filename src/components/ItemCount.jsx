import {useState} from 'react'

const ItemCount = (props) => {
    // const [variableDeEstado, FuncionModificadora]=useState(valorPorDefecto)
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
    return(
        <div>
            <button className='card-button' onClick={restar}> - </button>
            <span>{count}</span>
            <button className='card-button' onClick={sumar}> + </button>
        </div>        
    )
}

export default ItemCount