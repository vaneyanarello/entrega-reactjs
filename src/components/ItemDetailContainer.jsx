import React, { useEffect, useState } from 'react'
// import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { Navigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

  const [prodDetail, setProdDetail]= useState([])
  const[loading,setLoading]=useState(true)
  const{id} = useParams()
  const [invalid, setInvalid] = useState(null)

  // sin firebase
  // useEffect (()=>{
  //   getOneProduct (id)
  //   .then((res)=>setProdDetail(res))
  //   .catch((error)=>alert('Se produjo un error'))
  //   .finally(()=>setLoading(false))
  // })
  
  //con firebase
  useEffect (()=>{
    // (1) ref al prod
    const prodRef = doc(db,'productos', id)
    // (2) traer la data
    getDoc(prodRef)
    .then((res)=>{
      if(res.data()){
        setProdDetail({id: res.id, ...res.data()})
        console.log('detalle de producto')
      } else
        setInvalid(true)
        console.log('invalid')
    }
      )
    .catch((error)=>alert('Se produjo un error'))
    .finally(()=>setLoading(false))
  }, [id])

  if(invalid){
    return <Navigate to="*" replace />
  }

    return (
    <div style= {{padding:'30px'}}>
      {loading ? <Loader text='Cargando producto'/> : <ItemDetail prodDetail={prodDetail}/>}
    </div>
  )
}

export default ItemDetailContainer
