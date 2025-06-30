import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OrderSummary.css'; 
import Loading from '../Loading/Loading'; 




const OrderSummary = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts/5' );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCart(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <Container style={{ display: "flex", justifyContent: "center",
    alignItems: "center", minHeight: "200px" 
    }}> <Loading /> </Container>;
  }

  if (error) {
    return <Container>حدث خطأ: {error.message}</Container>;
  }

  if (!cart || !cart.products || cart.products.length === 0) {
    return <Container>سلة المشتريات فارغة.</Container>;
  }

  
  const items = cart.products.map(product => ({
    id: product.id,
    name: product.title,
    price: product.price,
    quantity: product.quantity,
    image: product.thumbnail, 
  }));

  // حساب المجموع الفرعي والإجمالي من بيانات الـ API
  const subtotal = cart.total; 
  const shipping = 0; 
  const total = cart.total; 
  const taxes = cart.discountedTotal - cart.total; 

  return (
    <Container className="order-summary-container">
      {/* قسم المنتجات */}
      <div className="order-items-list">
        {items.map(item => (
          <Row key={item.id} className="order-item-row align-items-center">
            <Col xs={2} className="item-image-col">
              <div className="item-image-wrapper">
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

export default OrderSummary;
