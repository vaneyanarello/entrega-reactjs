import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({text}) => {
  return (
    <div style={{width:'100%', gap:'20px', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Spinner animation='grow' style={{ color: '#946343', width:'5rem', height:'5rem' }}/>
      <span style={{color:'#946343'}}>{text}</span>
    </div>
  )
}

export default Loader
