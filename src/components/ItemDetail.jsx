import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';
import '../assets/styles/ItemDetail.css'

const ItemDetail = ({prodDetail}) => {
  return (
    <div className='item-render'>
    <div className='item-img'>
        <img style={{width:'400px'}} src={prodDetail.img} alt={prodDetail.name} />
    </div>
    <div className='item-info'>
        <h1>{prodDetail.name}</h1>
        <p>{prodDetail.long_description}</p>
        <h3>{prodDetail?.price?.toFixed(2)} €</h3>
        {prodDetail.variants?<select name="" id="">{prodDetail?.variants?.map((variant,index)=>(
            <option key={index} value={variant.variant_name}>{variant.variant_name}</option>))}
        </select>:''}
        <ItemCount/>
        <button className='card-button' variant="primary" >Agregar al carrito</button>
    </div>
    </div>
        
  )
}

export default ItemDetail
