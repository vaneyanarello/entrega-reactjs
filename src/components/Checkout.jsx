import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import EmptyCart from './EmptyCart'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Checkout = () => {    
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail]= useState('')
    const [error, setError]= useState(null)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clear} = useContext(CartContext)

    const buyerData = (e)=> {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
console.log('datosbuyer',buyer)

const finalizarCompra = (e) => {
    //para que no recargue todo y pierda carrito y form
    e.preventDefault()

    if(!buyer.name || !buyer.lastname || !buyer.address || !buyer.email || !validMail){
        setError(' Por favor, complete todos los campos ')
    } else if(buyer.email!== validMail){
        setError(' Los correos no coinciden ')
    } else {
        setError(null)
        let order = {
            comprador: buyer,
            compra: cart,
            total: total(),
            fecha: serverTimestamp()
        }
        
        
        console.log('datosorden',order)
        
        
        const orderColl = collection(db,'orders')
        addDoc(orderColl, order)
        .then((res)=> {
            setOrderId(res.id)
            clear() //con esto borro el carrito
        })
        .catch((error)=> console.log(error))
    }
}

if(!cart.length && !orderId){
    return<EmptyCart/>
}

  return (
   <>
   {
    orderId
    ?
    <div>
        {/* <h1>Muchas gracias por tu compra!</h1>
        <h3>Tu numero de orden es {orderId}</h3>
        <Link className='btn card-button' to='/'>Volver al Inicio</Link> */}
        <Card className="text-center shadow p-4" style={{ maxWidth: '500px', margin: '50px auto' }}>
  <Card.Body>
    <Card.Title style={{ color: '#946343', fontSize: '2rem' }}>
      ¡Muchas gracias por tu compra! 🧡
    </Card.Title>

    <Card.Text style={{ marginTop: '15px' }}>
      Tu número de orden es:
      <br />
      <strong>{orderId}</strong>
    </Card.Text>

    <Link to='/' className='btn card-button mt-3'>
      Volver al inicio
    </Link>
  </Card.Body>
</Card>
    </div>
    :
     <div style={{color:'#946343', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <h1>Tu orden está casi lista, completa los datos para continuar:</h1>
    {error && <span style={{backgroundColor:'#caac99', borderRadius:'5px', padding:'5px', marginBottom:'10px'}}>{error}</span>}
      <div><form className='p-4 border rounded shadow-sm bg-light' style={{display:'flex', flexDirection:'column', gap:'15px', color:'#946343', fontWeight:'bold', width:'50vw'}} onSubmit={finalizarCompra}>
                <div><label htmlFor="">Nombre: </label>
                <input name='name' placeholder='Ingrese su nombre' className='form-control' type="text" onChange={buyerData}/>
                </div>
                <div>                
                <label htmlFor="">Apellido</label>
                <input name='lastname' placeholder='Ingrese su apellido' className='form-control' type="text" onChange={buyerData}/>
                </div>
                <div>                
                <label htmlFor="">Domicilio</label>
                <input name='address' placeholder='Ingrese su domicilio' className='form-control' type="text" onChange={buyerData} />
                </div>
                <div>                
                <label htmlFor="">Email</label>
                <input name='email' placeholder='Ingrese su correo' className='form-control' type='email' onChange={buyerData} />
                </div>
                <div>                
                <label htmlFor="">Repita su email</label>
                <input name='secondemail' placeholder='Repita su correo' className='form-control' type="email"  onChange={(e)=> setValidMail(e.target.value)}/>
                </div>
                <div>                
                <button type='submit' className='btn card-button'>Generar Orden</button>
                </div>
</form></div>
    </div>
   }
   </>
  )
}

export default Checkout