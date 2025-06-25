// src/components/Checkout/Checkout.jsx (أو OrderSummary.jsx)

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OrderSummary.css'; // تأكد من استيراد ملف CSS الخاص بك

const OrderSummary = () => { // تأكد من أن اسم المكون هنا يطابق اسم ملفك
  // بيانات المنتجات
  const items = [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      price: 7.25,
      quantity: 1,
      // المسار يبدأ من جذر مجلد public
      // بما أن مجلدك اسمه 'image' (بالمفرد)، فالمسار هو /image/
      // وتأكد من اسم الملف الفعلي بالضبط
      image: "src/assets/images/images.jpeg", // 
    },
    {
      id: 2,
      name: "Coca-Cola - 2 L Bottle",
      price: 3.85,
      quantity: 1,
      image: "src/assets/images/product-image-49.jpg", 
    },
    {
      id: 3,
      name: "Fairlife Lactose-Free 2% Milk",
      price: 3.69,
      quantity: 1,
      image: "src/assets/images/cc_1596029588_5004-500x500.jpg",
    }
  ];
  
  // حساب المجموع الفرعي
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; 
  const total = subtotal + shipping;
  const taxes = 2.46; 

  return (
    <Container className="order-summary-container">
      {/* قسم المنتجات */}
      <div className="order-items-list">
        {items.map(item => (
          <Row key={item.id} className="order-item-row align-items-center">
            <Col xs={2} className="item-image-col">
              <div className="item-image-wrapper">
                {/* استخدام المسار مباشرة من item.image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-thumbnail"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" fill="%23aaa" font-family="sans-serif" font-size="10" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'; // صورة بديلة عند الخطأ
                  }}
                />
                <span className="item-quantity-badge">{item.quantity}</span>
              </div>
            </Col>
            <Col xs={7} className="item-name-col">
              <span className="item-name">{item.name}</span>
            </Col>
            <Col xs={3} className="item-price-col text-end">
              <span className="item-price">${item.price.toFixed(2 )}</span>
            </Col>
          </Row>
        ))}
      </div>

      {/* قسم الملخص (Subtotal, Shipping, Total) */}
      <div className="order-summary-details">
        <Row className="summary-line">
          <Col xs={8}>
            <span className="summary-label">Subtotal · {items.length} items</span>
          </Col>
          <Col xs={4} className="text-end">
            <span className="summary-value">${subtotal.toFixed(2)}</span>
          </Col>
        </Row>

        <Row className="summary-line">
          <Col xs={8}>
            <span className="summary-label">Shipping</span>
          </Col>
          <Col xs={4} className="text-end">
            <span className="summary-value-free">FREE</span>
          </Col>
        </Row>

        <Row className="summary-line total-line">
          <Col xs={8}>
            <span className="summary-label total-label">Total</span>
          </Col>
          <Col xs={4} className="text-end total-value-col">
            <span className="currency-label">USD</span>
            <span className="summary-value total-value">${total.toFixed(2)}</span>
          </Col>
        </Row>

        <Row className="summary-line tax-info-line">
          <Col xs={12} className="text-end">
            <span className="tax-info">Including ${taxes.toFixed(2)} in taxes</span>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OrderSummary; // تأكد من أن هذا يطابق اسم المكون الخاص بك
