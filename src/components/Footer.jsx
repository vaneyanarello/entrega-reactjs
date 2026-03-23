import { collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../service/firebase'

const Footer = () => {

  

  return (
    <div style={{backgroundColor:'#946343', display:'flex', justifyContent:'space-around', alignItems:'center', color:'white', padding:'20px 0', marginTop:'auto', position:'fixed', bottom:'0px', left:'0px', width:'100%'}}>
      <p>mail y telefono</p>
      <p>Todos los derechos reservados</p>
      <p>Redes</p>
    </div>
  )
}

export default Footer
