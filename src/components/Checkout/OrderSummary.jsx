import React, { useContext, useEffect, useState } from 'react'; 
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'; 
import { CartContext } from '../../context/CartContext'; 
import { Link } from 'react-router-dom'; 
import './OrderSummary.css';


const OrderSummary = () => {
  
  const { cart } = useContext(CartContext); 

  
  const [localCartItems, setLocalCartItems] = useState([]);

  
  useEffect(() => {
    const processedItems = cart.reduce((acc, product) => {
      const existingItem = acc.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({
          id: product.id,
          title: product.title || product.name,
          price: product.price,
          thumbnail: product.thumbnail || product.image,
          quantity: 1
        });
      }
      return acc;
    }, []);
    setLocalCartItems(processedItems);
  }, [cart]); 

  const removeFromLocalCart = (productId) => {
    setLocalCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateLocalQuantity = (productId, newQuantity) => {
    setLocalCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = localCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;
  const taxes = 0;

  if (localCartItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="info">
          Your cart is empty. Please add some items from the <Link to="/shop">Shop</Link> page.
        </Alert>
        <Link to="/shop" className="btn btn-primary mt-3">Go to Shop</Link>
      </Container>
    );
  }

  return (
    <Container className="order-summary-container mt-5">
      <h2 className="mb-4 text-center">Order Summary</h2>
      {/* قسم المنتجات */}
      <div className="order-items-list">
        {localCartItems.map(item => (
          <Row key={item.id} className="order-item-row align-items-center mb-3 py-2 border-bottom">
            <Col xs={2} className="item-image-col">
              <div className="item-image-wrapper">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="item-thumbnail"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" fill="%23aaa" font-family="sans-serif" font-size="10" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>';
                  }}
                />
                <span className="item-quantity-badge">{item.quantity}</span>
              </div>
            </Col>
            <Col xs={5} className="item-name-col">
              <span className="item-name">{item.title}</span>
            </Col>
            <Col xs={3} className="item-quantity-control d-flex align-items-center">
              <Button variant="outline-secondary" size="sm" onClick={( ) => updateLocalQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
              <span className="mx-2">{item.quantity}</span>
              <Button variant="outline-secondary" size="sm" onClick={() => updateLocalQuantity(item.id, item.quantity + 1)}>+</Button>
            </Col>
            <Col xs={2} className="item-price-col text-end">
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <Button variant="link" className="text-danger p-0 ms-2" onClick={() => removeFromLocalCart(item.id)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Col>
          </Row>
        ))}
      </div>

      {/* قسم الملخص (Subtotal, Shipping, Total) */}
      <div className="order-summary-details mt-4 p-3 border rounded">
        <Row className="summary-line mb-2">
          <Col xs={8}>
            <span className="summary-label">Subtotal · {localCartItems.length} items</span>
          </Col>
          <Col xs={4} className="text-end">
            <span className="summary-value">${subtotal.toFixed(2)}</span>
          </Col>
        </Row>

        <Row className="summary-line mb-2">
          <Col xs={8}>
            <span className="summary-label">Shipping</span>
          </Col>
          <Col xs={4} className="text-end">
            <span className="summary-value-free">FREE</span>
          </Col>
        </Row>

        <Row className="summary-line total-line pt-2 border-top">
          <Col xs={8}>
            <span className="summary-label total-label">Total</span>
          </Col>
          <Col xs={4} className="text-end total-value-col">
            <span className="currency-label">USD</span>
            <span className="summary-value total-value">${total.toFixed(2)}</span>
          </Col>
        </Row>

        {taxes > 0 && (
          <Row className="summary-line tax-info-line">
            <Col xs={12} className="text-end">
              <span className="tax-info">Including ${taxes.toFixed(2)} in taxes</span>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
};

export default OrderSummary;
