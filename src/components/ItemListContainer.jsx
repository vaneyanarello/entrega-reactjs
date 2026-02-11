import { useEffect, useState } from 'react'
import '../assets/styles/ItemListContainer.css'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'

const ItemListContainer = (props) =>{

    const [data, setData]=useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=>setData(res))
        .catch((error)=>alert(error))
    },[])

    return(
        <div>
            <h1 className='mensaje-inicio'>{props.mensaje}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer