import React from 'react'
import Item from './Item'
import '../assets/styles/ItemList.css'

const ItemList = ({data}) => {
  return (
    <div className='cards'>
      {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
