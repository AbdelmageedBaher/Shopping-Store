// templates/component/Checkout.js
import './Checkout.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';
import OrderSummary from './OrderSummary';









export default function Checkout() {
    return(

        <div className='checkout_container'>
      <Container>
      
       {/* Checkout Content */}
      <div className='checkout_content_container'>

      <div className='checkout_content_right'>
          <Container className="checkout-form-container">
            <Form>
              {/* قسم معلومات الاتصال */}
              <div className="form-section">
                <div className="form-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "26px" }}>
                  <h5 className="section-title" >Contact</h5>
                  <a href="#" style={{ fontSize: "14px", color: "#007bff" }}>Login</a>
        </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or mobile phone number" className="custom-form-control" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Email me with news and offers" className="custom-checkbox" />
          </Form.Group>
        </div>

        {/* قسم معلومات التوصيل */}
        <div className="form-section">
          <h5 className="section-title">Delivery</h5>
          <Form.Group className="mb-3" controlId="formCountryRegion">
            <Form.Label className="form-label-small">Country/Region</Form.Label>
            <Form.Control as="select" className="custom-form-control">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
              {/* أضف المزيد من الخيارات حسب الحاجة */}
            </Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Control type="text" placeholder="First name (optional)" className="custom-form-control" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Control type="text" placeholder="Last name" className="custom-form-control" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Control type="text" placeholder="Address" className="custom-form-control" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formApartment">
            <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" className="custom-form-control" />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formPostalCode">
                <Form.Control type="text" placeholder="Postal code (optional)" className="custom-form-control" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formCity">
                <Form.Control type="text" placeholder="City" className="custom-form-control" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formSaveInfo">
            <Form.Check type="checkbox" label="Save this information for next time" className="custom-checkbox" />
          </Form.Group>
        </div>

        {/* قسم طريقة الشحن */}
        <div className="form-section">
          <h5 className="section-title">Shipping method</h5>
          <div className="shipping-option">
            <Form.Check
              type="radio"
              id="shippingStandard"
              name="shippingMethod"
              label="Standard"
              defaultChecked
              className="custom-radio"
            />
            <span className="shipping-price">FREE</span>
          </div>
        </div>

        {/* قسم الدفع */}
        <div className="form-section">
          <h5 className="section-title">Payment</h5>
          <p className="payment-info-text">All transactions are secure and encrypted.</p>

          <div className="payment-placeholder">
            <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
            <p className="payment-message">This store can't accept payments right now.</p>
          </div>
        </div>

        {/* زر الدفع */}
        <Button variant="primary" type="submit" className="pay-now-button">
          Pay now
        </Button>
      </Form>
      <hr />
      <a href="#" style={{fontSize:"14px", }}>Privacy Policy</a>
      </Container>
      </div>

      <div className='checkout_content_left'>
        <OrderSummary />
      </div>
      </div>
      {/* //=== END Checkout Content ===// */}

      </Container>
        </div>
    )
};

