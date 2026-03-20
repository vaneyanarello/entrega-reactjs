import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';
import '../assets/styles/ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({prodDetail}) => {
    
    const [purchase, setPurchase] = useState(false)
    
    const {cart, addItem} = useContext(CartContext)
    console.log(cart)
    
    const [selectedVariant, setSelectedVariant] = useState()
    useEffect(()=>{
        if(prodDetail?.variants?.length){setSelectedVariant(prodDetail.variants[0].variant_name)}
    }, [prodDetail])
    
    const onAdd = (cantidad)=> {
        //alert(`Agregaste al carrito ${cantidad} unidades del producto ${prodDetail.name}`)
        addItem(prodDetail, cantidad, selectedVariant)
        setPurchase(true)
    }
    

    if (!prodDetail || !prodDetail.img) {
    return null
  }
console.log('estado de variante',selectedVariant)
  return (
    <div className='item-render'>
    <div className='item-img'>
        <img style={{width:'400px'}} src={prodDetail.img} alt={prodDetail.name} />
    </div>
    <div className='item-info'>
        <h1>{prodDetail.name}</h1>
        <p>{prodDetail.long_description}</p>
        {prodDetail.variants?<select  onChange={(e) => {setSelectedVariant(e.target.value)}}>
            {prodDetail?.variants?.map((variant,index)=>(
            <option key={index} value={variant.variant_name}>{variant.variant_name}</option>))}
        </select>:''}
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <h3>{prodDetail?.price?.toFixed(2)} €</h3>
            {purchase ? <Link className='btn card-button' to='/cart'>Ir al carrito</Link> : <ItemCount stock={prodDetail.stock} onAdd={onAdd}/>}
        </div>
    </div>
    </div>
        
  )
}

export default ItemDetail
