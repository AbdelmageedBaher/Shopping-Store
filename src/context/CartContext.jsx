import React, { createContext, useState, useEffect } from "react";

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

  // دالة لحذف منتج من السلة بالكامل (تطابق deleteFromCart في Navbar)
  const deleteFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // دالة لتغيير كمية منتج (تطابق changeAmount في Navbar)
  const changeAmount = (type, product) => { // product هنا هو val من Navbar
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === product.id) {
          const newQuantity = type === 'plus' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(0, newQuantity) }; // لا تسمح بكمية سالبة
        }
        return item;
      }).filter(item => item.quantity > 0) // إزالة العنصر إذا أصبحت الكمية 0
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

  return (
    <CartContext.Provider
      value={{
        cart: cartItems, // Navbar يتوقع 'cart'
        addToCart,
        deleteFromCart, // Navbar يتوقع 'deleteFromCart'
        changeAmount,   // Navbar يتوقع 'changeAmount'
        totallCart: getSubtotal(),     // Navbar يتوقع 'totallCart'
        cartLength: getTotalItems(),   // Navbar يتوقع 'cartLength'
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
