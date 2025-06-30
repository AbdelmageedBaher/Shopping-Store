// templates/component/Checkout.js
import './Checkout.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faCreditCard,
//   faBars, 
//   faDrumstickBite, 
//   faCookieBite,    
//   faCoffee         
// } from '@fortawesome/free-solid-svg-icons';
import OrderSummary from './OrderSummary';



const CustomCategoryDropdown = () => {
  return (
    <div className="categories-widget-wrapper">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-categories" className="custom-category-toggle">
          <FontAwesomeIcon icon={faBars} className="menu-icon" /> ALL CATEGORIES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Fruits & Vegetables</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Dairy & Eggs</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Baked Goods</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Frozen Foods</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Beverages</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Snacks</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="total-products-badge">
        TOTAL 50 PRODUCTS
      </div>
    </div>
  );
};





export default function Checkout() {
    return(

        <div className='checkout_container'>
        <div className='spam'>Due to current circumstances, there may be slight delays in order processing</div>

      <Container>

      {/* NAV */}
      <div className='checkout_nav'>
        <div className='spam_2 shadow-sm'>
          <Row>
            <Col className='spam_2_link' xs={3}  >
                <a href="#">About Us </a>
                <a href="#">Compare </a>
                <a href="#">Wishlist </a>
            </Col>
            <Col xs={9} style={{display:"flex", gap:"25px",   }}>
            <div style={{fontSize:"12px", color:"#3E445A", }}>
                <img src="src/icon/Vector.png" className='icon' />
                100% Secure delivery without contacting the courier
            </div>
            <div style={{fontSize:"12px", color:"#3E445A", }}>
                Need help? Call Us: <span style={{color:"#35AFA0", fontWeight:"700"}}>+ 0020 500</span>
            </div>
            <div style={{display:"flex", gap:"5px", fontSize:"12px", }}>
                <NavDropdown
              id="nav-dropdown-dark-example"
              title="English"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="USD"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Egp</NavDropdown.Item>
            </NavDropdown>
            </div>
            </Col>
          </Row>
        </div>

        <div className='checkout_nav shadow-sm'>
        <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="#home"><img src="src/assets/images/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex " style={{width:"500px", height:"60px", marginLeft:"35px"}}>
              <Form.Control
                type="search"
                placeholder="Search for products, fruit, meat, eggs .etc "
                className="me-2"
                aria-label="Search"
              />
              
            </Form>
            <div className='nav_icon' style={{display:"flex", gap:"20px", alignItems:"center", marginLeft:"35px"}}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" style={{border:"1px solid #ccc", borderRadius:"50%", padding:"10px", backgroundColor:"#E2E4EC", color:"#3E445A"}} width="42" height="42" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
              </a>
              <span style={{fontSize:"16px", color:"#3E445A", fontWeight:"600"}}>$0.00</span>
              <div  className="basket-container">
                <a href="#">
                <img  src="src/icon/basket.png" className='icon'  style={{border:"1px solid #ccc", borderRadius:"50%", padding:"10px", backgroundColor:"#FFF1EE", color:"#3E445A"}} />
                <span className="cart-count-badge">0</span>
              </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
        <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <CustomCategoryDropdown />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="#home">
              HOME
            </Nav.Link>
            <Nav.Link href="#shop">
              SHOP
            </Nav.Link>
            <Nav.Link href="#meats-seafood">
              <FontAwesomeIcon icon={faDrumstickBite} className="nav-icon" /> MEATS & SEAFOOD
            </Nav.Link>
            <Nav.Link href="#bakery">
              <FontAwesomeIcon icon={faCookieBite} className="nav-icon" /> BAKERY
            </Nav.Link>
            <Nav.Link href="#beverages">
              <FontAwesomeIcon icon={faCoffee} className="nav-icon" /> BEVERAGES
            </Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
      </div>
      {/* //=== END NAV ===// */}

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

