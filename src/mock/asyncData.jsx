import productos from './products.json'

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