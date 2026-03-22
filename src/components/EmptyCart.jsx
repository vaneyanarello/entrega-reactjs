import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { getProductsByCategory } from '../mock/asyncData'
import Item from './Item'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const EmptyCart = () => {

    const [Sugest, setSugest] = useState([])

  //sin firebase    
    // useEffect (()=>{
    //     getProductsByCategory ('Box')
    //     .then((res)=>setSugest(res))
    //     .catch((error)=>alert('Se produjo un error'))
    //   },[])

//con firebase
    useEffect (()=>{
                const prodColl = query(collection(db, 'productos'), where('category', '==', 'Box'))
                getDocs(prodColl)
                .then((res)=>{
                    const list = res.docs.map((doc)=>{
                        return {
                            id:doc.id,
                            ...doc.data()
                        }
                    })
                    setSugest(list)
                } )
        .catch((error)=>alert('Se produjo un error'))
      },[])
      
      return (
    <div>
      <div style={{display: 'flex', flexDirection:'column',alignItems:'center', padding:'20px', gap:'30px'}}>
        <h2 style={{color:'#946343'}}>Ups! Parece que aun no elegiste nada</h2>
        <h3 style={{color:'#946343'}}>Esto podria gustarte:</h3>        
        <div style={{display:'flex', justifyContent:'space-around', gap:'20px'}}>
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
