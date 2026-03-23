import { Button } from 'react-bootstrap';
import productos from './products.json'
import { Link } from 'react-router-dom';

let error = false;

export const getProducts = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(error){
                reject('Hubo un error, intente nuevamente más tarde')
            } else {
                resolve(productos)
            }
        }, 2000);
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ocurrió un error durante la carga de este producto')
            } else {
                let prod = productos.find((pr) => (pr.id === id))
                resolve(prod)
            }
        },2000);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ocurrió un error')
            } else {
                let prodCat = productos.filter((pr) => (pr.category === category))
                resolve(prodCat)
            }
        },1000)
    });
}