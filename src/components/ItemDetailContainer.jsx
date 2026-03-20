import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {

  const [prodDetail, setProdDetail]= useState([])
  const[loading,setLoading]=useState(true)
  const{id} = useParams()


  useEffect (()=>{
    getOneProduct (id)
    .then((res)=>setProdDetail(res))
    .catch((error)=>alert('Se produjo un error'))
    .finally(()=>setLoading(false))
  })
  
    return (
    <div style= {{padding:'30px'}}>
      {loading ? <Loader text='Cargando producto'/> : <ItemDetail prodDetail={prodDetail}/>}
    </div>
  )
}

export default ItemDetailContainer
