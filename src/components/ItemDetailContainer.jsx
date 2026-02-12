import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
  const [prodDetail, setProdDetail]= useState([])

  useEffect (()=>{
    getOneProduct ('006')
    .then((res)=>setProdDetail(res))
    .catch((error)=>alert('Se produjo un error'))
  })
  
    return (
    <div>
      <ItemDetail prodDetail={prodDetail}/>
    </div>
  )
}

export default ItemDetailContainer
