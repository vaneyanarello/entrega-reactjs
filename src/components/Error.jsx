import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column',alignItems:'center', padding:'20px'}}>
      <img style={{width:'60%'}} src='https://i.postimg.cc/L596hHT2/error.jpg' alt="Error" />
      <Link className='btn btn-dark' to='/'>Volver al Inicio</Link>
    </div>
  )
}

export default Error
