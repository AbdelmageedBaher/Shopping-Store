import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
        // إضافة فحص لـ product.price لضمان أنه رقم
        if (product && typeof product.price === 'number') {
          return [...prevItems, {
            id: product.id,
            title: product.title || product.name || 'Unknown Product', // قيمة افتراضية
            price: product.price,
            thumbnail: product.thumbnail || product.image || 'default-image.jpg', // قيمة افتراضية
            quantity: 1 // Navbar يتوقع quantity
          }];
        } else {
          console.error("Product added to cart does not have a valid price:", product);
          return prevItems; // لا تضف المنتج إذا لم يكن له سعر صالح
        }
      }
    });
  };

  // دالة لحساب الإجمالي الفرعي لسلة التسوق
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // دالة لحساب العدد الكلي للعناصر في السلة
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

    if (!findProduct) {
            setCart([...cart , {...product , amount : 1}])
    }else{
              findProduct.amount +=1              
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
    
    
    
    
    return (<CartContext.Provider value={{ cart:cartItems, addToCart, deleteFromCart,  changeAmount, totallCart: getSubtotal(),cartLength: getTotalItems(),  getSubtotal, getTotalItems, }
    
    }
        > {children}
      </CartContext.Provider>
    );
}


