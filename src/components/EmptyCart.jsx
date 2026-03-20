import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../mock/asyncData'
import Item from './Item'

const EmptyCart = () => {

    const [Sugest, setSugest] = useState([])
    
    useEffect (()=>{
        getProductsByCategory ('Box')
        .then((res)=>setSugest(res))
        .catch((error)=>alert('Se produjo un error'))
      },[])

  return (
    <div>
      <div style={{display: 'flex', flexDirection:'column',alignItems:'center', padding:'20px', gap:'30px'}}>
        <h3 style={{color:'#946343'}}>Ups! Parece que aun no elegiste nada, esto podria gustarte:</h3>
        <div style={{display:'flex', justifyContent:'space-around', padding:'20px', gap:'20px'}}>
            {Sugest.map(prod => (
                <Item key={prod.id} prod={prod}/>
            ))}
        </div>
      <Link className='btn card-button' to='/'>Ver mas productos</Link>
    </div>
    </div>
  )
}

export default EmptyCart
