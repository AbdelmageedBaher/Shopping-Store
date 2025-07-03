import { createContext, useState } from "react";


export const cartContext = createContext()


export const CartContextProvaider = ({children})=>{

const [cart , setCart] = useState([])




function addToCart(product) {

    setCart([...cart , product])

console.log(product);

}












return <cartContext.Provider value={{addToCart}}>

{children}


</cartContext.Provider>


}