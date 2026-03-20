import { createContext, useState } from "react";

// la cajita vacia
export const CartContext = createContext()


export const CartProvider = ({children}) => {
// las herramientas (fun y datos)

    const [cart, setCart]= useState ([])

    const addItem = (item, qty, variant)=> {
        if(isInCart(item.id, variant)){
            console.log('isincart')
            setCart(
                cart.map((prod)=>{
                    if(item.id===prod.id && variant === prod.variant){
                        console.log('sameVar')
                        return{...prod, quantity: prod.quantity+qty}
                    } else{
                        console.log('difVar')
                        return prod
                    }
                })
            )
        }else{
            console.log('isnot')
            setCart([...cart,{...item,quantity:qty,variant}])
        }
    }

    const clear =()=>{
        setCart([])
    }

    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id, variant)=> {
        return cart.some((prod)=> prod.id === id && prod.variant === variant) 
    }








    return(
        //aca le digo que es el proveedor de cartContext
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart}}> 
            {children}
        </CartContext.Provider>
    )
}