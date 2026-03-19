import React, { useState } from 'react'

const Input = () => {

  const [name, setName]= useState('')

  const inputHandler =(event)=>{
    setName(event.target.value)
  }

  return (
    <div>
    <h2>Input</h2>  
    <input type="text" className='form-control' name='nombre' placeholder='Ingresa tu nombre' onChange={inputHandler}/>
    <p>{name}</p>
    </div>
  )
}

export default Input
