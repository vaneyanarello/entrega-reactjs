import { useEffect, useState } from 'react'
import '../assets/styles/ItemListContainer.css'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Input from './Input'
import Loader from './Loader'

const ItemListContainer = (props) =>{

    const [data, setData]=useState([])
    const[loading, setLoading] = useState(false)
    const{type}= useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            } else{ 
                    setData(res)
                }
        })
        .catch((error)=>alert(error))
        .finally(()=>setLoading(false))
    },[type])

    return(

        <>
        {
            loading 
            ? <Loader text={type?'Cargando categoria':'Cargando todos los productos'}/>
            :
            <div>
                <h1 className='mensaje-inicio'>{props.mensaje}{type && <span>{type}</span> }</h1>
                <Input/>
                <ItemList data={data}/>
            </div>
        }
        </>

    )
}

export default ItemListContainer