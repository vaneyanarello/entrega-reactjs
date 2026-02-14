import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [prodDetail, setProdDetail]= useState([])

  const{id} = useParams()


  useEffect (()=>{
    getOneProduct (id)
    .then((res)=>setProdDetail(res))
    .catch((error)=>alert('Se produjo un error'))
  })
  
    return (
    <div style= {{padding:'30px'}}>
      <ItemDetail prodDetail={prodDetail}/>
    </div>
  )
}

export default ItemDetailContainer
