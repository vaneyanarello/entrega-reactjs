import React, { useContext } from 'react'
import { TiTrash } from "react-icons/ti";
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartView = () => {
    
    const {cart, removeItem, clear, total} = useContext(CartContext)

  return (
    <div>
      <h1 style={{  color:'#946343'
}}>Tu carrito</h1>
      <div>
        {
            cart.map((compra)=> (
                <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem', boxShadow: '4px 4px 8px 0 #ecd6c7'}}>
                    <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                    <span>{compra.variant ? `${compra.name}: ${compra.variant}` : `${compra.name}`}</span>
                    <span>{compra.price.toFixed(2)} €</span>
                    <span>cantidad: {compra.quantity}</span>
                    <span>precio final: {compra.quantity * compra.price.toFixed(2)} €</span>
                    <button className= 'btn card-button' onClick={()=> removeItem(compra.id)}> <TiTrash/></button>
                </div>
            ))
        }
      </div>
      <span>Total a pagar: {total()} €</span>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
        <button className='btn card-button' onClick={clear}>Vaciar Carrito</button>
        <Link className='btn card-button' to='/checkout'>Terminar compra</Link>
    </div>
    </div>
  )
}

export default CartView



