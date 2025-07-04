import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // حاول تحميل سلة التسوق من Local Storage عند بدء التشغيل
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // تأثير جانبي لحفظ سلة التسوق في Local Storage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // دالة لإضافة منتج إلى السلة
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // إذا كان المنتج موجودًا بالفعل، قم بزيادة الكمية
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // إذا كان المنتج جديدًا، أضفه بكمية 1
        // تأكد من أن المنتج يحتوي على الحقول الأساسية (id, title, price, thumbnail)
        return [...prevItems, {
          id: product.id,
          title: product.title || product.name, // استخدم title أو name
          price: product.price,
          thumbnail: product.thumbnail || product.image, // استخدم thumbnail أو image
          quantity: 1
        }];
      }
    });
  };

  // دالة لإزالة منتج من السلة بالكامل
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // دالة لتحديث كمية منتج معين
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0) // إزالة العنصر إذا أصبحت الكمية 0 أو أقل
    );
  };

  // دالة لحساب الإجمالي الفرعي لسلة التسوق
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // دالة لحساب العدد الكلي للعناصر في السلة
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

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
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getSubtotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};