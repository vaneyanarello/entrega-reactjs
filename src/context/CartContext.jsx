import { createContext, useState } from "react";

// la cajita vacia
export const CartContext = createContext()


export const CartProvider = ({children}) => {
// las herramientas (fun y datos)

    const [cart, setCart]= useState ([])

    return(
        //aca le digo que es el proveedor de cartContext
        <CartContext.Provider value={{cart}}> 
            {children}
        </CartContext.Provider>
    )
}