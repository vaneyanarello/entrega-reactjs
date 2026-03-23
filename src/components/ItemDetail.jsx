import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import ItemCount from './ItemCount';
import '../assets/styles/ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({prodDetail}) => {
    
    const [purchase, setPurchase] = useState(false)
    
    const {cart, addItem, itemQty} = useContext(CartContext)
    console.log(cart)
    
    const [selectedVariant, setSelectedVariant] = useState()
    // useEffect(()=>{
    //     if(prodDetail?.variants?.length){setSelectedVariant(prodDetail.variants[0].variant_name)}
    // }, [prodDetail])

    useEffect(()=>{
        if(prodDetail?.variants?.length){
            setSelectedVariant(prodDetail.variants[0].variant_name)
        }else {setSelectedVariant("")}
    } , [prodDetail])
    
    const onAdd = (cantidad)=> {
        //alert(`Agregaste al carrito ${cantidad} unidades del producto ${prodDetail.name}`)
        addItem(prodDetail, cantidad, selectedVariant || "")
        setPurchase(true)
    }
    

    if (!prodDetail || !prodDetail.img) {
    return null
  }

console.log('estado de variante',selectedVariant)

// const stockActualizado = prodDetail.stock - itemQty(prodDetail.id)
const stockActualizado = selectedVariant
    ? prodDetail.variants.find(v => v.variant_name === selectedVariant).stock - itemQty(prodDetail.id, selectedVariant)
    : prodDetail.stock - itemQty(prodDetail.id)

  return (
    <div className='item-render'>
    <div className='item-img'>
        <img style={{width:'400px'}} src={prodDetail.img} alt={prodDetail.name} />
    </div>
    <div className='item-info'>
        <h1>{prodDetail.name}</h1>
        <h3>{prodDetail?.price?.toFixed(2)} €</h3>
        <p>{prodDetail.long_description}</p>
        {prodDetail.variants?<select  onChange={(e) => {setSelectedVariant(e.target.value)}}>
            {prodDetail?.variants?.map((variant,index)=>(
            <option key={index} value={variant.variant_name}>{variant.variant_name}</option>))}
        </select>:''}
        <div style={{display: 'flex', justifyContent:'space-between'}}>
        </div>
            <p>Stock: {stockActualizado} unidades disponibles</p>
            {purchase 
            ? 
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: '20px'}}>
                    <div style={{display:'flex', justifyContent:'center', gap:'10px'}}><ItemCount stock={stockActualizado} onAdd={onAdd}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', gap:'10px', alignItems:'center'}}>
                        <span> Cantidad en carrito: {itemQty(prodDetail.id, selectedVariant)}</span>
                    </div>    
                        <Link className='btn' to='/cart' style={{color:'#946343',   border: '1px solid #946343'}}>🛒 Ver carrito </Link>
                </div>  
            : 
                <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
    </div>
        
  )
}

export default ItemDetail
