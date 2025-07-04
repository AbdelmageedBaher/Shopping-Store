import React, { useState } from 'react';
import { Container, Row, Col, Alert, Button, Modal } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './OrderSummary.css';



const OrderSummary = () => {
  const { cartItems, getSubtotal, removeFromCart, updateQuantity } = useCart();

  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const subtotal = getSubtotal();
  const shipping = 0;
  const total = subtotal + shipping;
  const taxes = 0; 

  const handleRemoveClick = (productId, productName) => {
    setItemToRemove({ id: productId, name: productName });
    setShowModal(true);
  };

  const confirmRemoval = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      setShowModal(false);
      setItemToRemove(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  if (cartItems.length === 0) {
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
      <div className="order-items-list">
        {cartItems.map(item => (
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
            <Col xs={4} className="item-name-col">
              <span className="item-name">{item.title}</span>
            </Col>
            <Col xs={3} className="item-quantity-control d-flex align-items-center">
              <Button variant="outline-secondary" size="sm" onClick={( ) => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
              <span className="mx-2">{item.quantity}</span>
              <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
            </Col>
            <Col xs={3} className="item-price-col text-end" style={{display:"flex"}}>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <Button variant="link" className="text-danger p-0 ms-2" onClick={() => handleRemoveClick(item.id, item.title)}>
                <FontAwesomeIcon icon={faTrash} /> 
              </Button>
            </Col>
            
          </Row>
        ))}
      </div>

      <div className="order-summary-details mt-4 p-3 border rounded">
        <Row className="summary-line mb-2">
          <Col xs={8}>
            <span className="summary-label">Subtotal · {cartItems.length} items</span>
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

      {/* Modal  */}
      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove "<strong>{itemToRemove?.name}</strong>" from your cart?
        </Modal.Body>
        <Modal.Footer style={{alignItems:"center", justifyContent:"center"}}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmRemoval}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderSummary;
