import { useEffect, useState } from 'react'
import '../assets/styles/ItemListContainer.css'
// import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'
import productos from '../mock/products.json'



const ItemListContainer = (props) =>{

    const [data, setData]=useState([])
    const[loading, setLoading] = useState(false)
    const{type}= useParams()

    //SIN FIREBASE
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=>{
    //         if(type){
    //             setData(res.filter((prod)=> prod.category === type))
    //         } else{ 
    //                 setData(res)
    //             }
    //     })
    //     .catch((error)=>alert(error))
    //     .finally(()=>setLoading(false))
    // },[type])

    //CON FIREBASE
    useEffect(()=>{
        setLoading(true)
        //ref collect (1) y filtro x categoria
        const prodColl = type ? query(collection(db, 'productos'), where('category', '==', type)) : collection(db, 'productos')
        // traer la info (2)
        getDocs(prodColl)
        .then((res)=>{
            //limpiar data (3)
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        } )
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[type])




//     const subirProd = ()=>{
//     console.log('subiendo data')
//     const collASubir = collection(db,'productos')
//     productos.map((prod)=> addDoc(collASubir, prod))
//   }

    return(

        <>
        {
            loading 
            ? <Loader text={type?'Cargando categoria':'Cargando todos los productos'}/>
            :
            <div>
                <h1 className='mensaje-inicio'>{props.mensaje}{type && <span>{type}</span> }</h1>
                <div style={{display:'flex', justifyContent:'center', padding:'3rem'}}><ItemList data={data}/></div>
                {/* <button onClick={subirProd}>SUBIR DATA</button> */}

                
            </div>
        }
        </>

    )
}

export default ItemListContainer