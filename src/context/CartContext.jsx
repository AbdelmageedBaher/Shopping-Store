import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
    console.log(product);
  }

<<<<<<< HEAD
export const CartContextProvaider = ({children})=>{
    
    const [cart , setCart] = useState([])

useEffect(()=>{
    if(localStorage.getItem("cartData")){
        setCart(JSON.parse(localStorage.getItem("cartData")))
        
    }else{
        setCart([])
    }
} , [])
    
    useEffect(()=>{
    localStorage.setItem("cartData" , JSON.stringify(cart))
    } , [cart])



function addToCart(product) {
    const findProduct=cart.find((el)=> el.title === product.title) 

    if (!findProduct) {
            setCart([...cart , {...product , amount : 1}])
    }else{
              findProduct.amount +=1              
    }

}

function deleteFromCart(product) {
    const newArr = cart.filter((el)=>  el.title !== product.title)
    setCart(newArr)
}

function changeAmount(state , product) {
 if(state === "plus"){
    ++product.amount
    setCart([...cart])
}else{
    if(product.amount > 0){
        --product.amount
        
        setCart([...cart])
    }else{
        deleteFromCart(product)
    }
 }
}
const totallCart = cart.reduce((a , b)=> {
    return a + (b.price * b.amount)
} , 0 )

const cartLength = cart.reduce((a , b)=>{return a+b.amount} , 0)








return <cartContext.Provider value={{addToCart , cart , deleteFromCart , changeAmount , totallCart , cartLength}}>

{children}


</cartContext.Provider>


}
=======
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
>>>>>>> bd579597a60af1f67dcc3035dde538a6df613e23
