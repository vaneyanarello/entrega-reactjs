import { useEffect, useState } from 'react'
import '../assets/styles/ItemListContainer.css'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>{

    const [data, setData]=useState([])
    
    const{type}= useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            } else{ 
                    setData(res)
                }
        })
        .catch((error)=>alert(error))
    },[type])

    return(
        <div>
            <h1 className='mensaje-inicio'>{props.mensaje}{type && <span>{type}</span> }</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer