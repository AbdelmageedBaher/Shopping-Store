import React, { useContext } from "react";
import "./Navbar.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { apiContext } from "../../context/apiContext";

export default function navbar() {
  const { cart, deleteFromCart, changeAmount, totallCart, cartLength } = useContext(CartContext);
  const { apiCategories, getApiSpacificCategory } = useContext(apiContext);
  const navigate = useNavigate();

  const handleCategoryClick = async (categorySlug) => {
    const fullUrl = `https://dummyjson.com/products/category/${categorySlug}`;
    await getApiSpacificCategory(fullUrl);
    navigate("/shop", { state: { selectedCategory: categorySlug } });
  };

  const showDataCart = cart.map((val, index) => (
    <div key={index} className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="w-100" src={val.thumbnail} />
        </div>
        <div className="col-md-8">
          <div className="card-body position-relative">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">${(val.price * val.quantity).toFixed(0)}</p>
            <div className="card-text flex">
              <button onClick={() => changeAmount("plus", val)} className="w-50 btn btn-dark p-0">+</button>
              <p className="w-50 flex m-0 fs-5 border mx-1 rounded">{val.quantity}</p>
              <button onClick={() => changeAmount("min", val)} className="w-50 btn btn-dark p-0">-</button>
            </div>
            <div
              onClick={() => deleteFromCart(val.id)}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              className="position-absolute top-0 flex end-0 fs-4 p-0 mx-3 my-1 btn btn-danger"
            >
              <IoMdCloseCircleOutline className="m-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {/* NavPart-1 */}
      <div className="NavPart-1 d-flex justify-content-center align-items-center text-center">
        Due to current circumstances, there may be slight delays in order processing
      </div>

      {/* NavPart-2 */}
      <Container fluid className="NavPart-2 d-flex flex-wrap align-items-center py-2">
        <Row className="w-100">
          <Col xs={12} md={4} className="Part-left d-flex align-items-center gap-2 justify-content-center justify-content-md-start mb-2 mb-md-0">
            <Link to="/about">About Us</Link>
            <Link>Compare</Link>
            <Link>Wishlist</Link>
          </Col>
          <Col xs={12} md={8} className="Part-right d-flex align-items-center justify-content-center justify-content-md-end text-center text-md-start gap-2">
            <img src="src/assets/images/hand.png" width={25} height={25} />
            <span className="me-1 ms-1">100% Secure delivery without contacting the courier</span> |
            <span className="ms-1">Need help? Call Us: <span className="cullUs">+1 234 567 89</span></span>
            <div className="lang d-flex align-items-center gap-1">
              USD
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.65995 1.73454L4.17067 4.11596..." fill="#3E445A" />
              </svg>
              English
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.65995 1.73454L4.17067 4.11596..." fill="#3E445A" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>

      {/* NavPart-3 */}
      <Container fluid className="NavPart-3 d-flex flex-wrap align-items-center justify-content-between py-2">
        <Link to="/" className="Partlogo position-relative me-4">
          <img src="src/assets/images/logo.png" alt="logo" width={100} height={50} />
        </Link>

        <div className="searchPart d-flex flex-grow-1 mx-3 my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search for Products, fruit, meat, eggs .etc..." />
        </div>
   <div className="login d-flex justify-content-evenly align-items-center gap-2">
          <Link to="/login">
            <svg
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                x="0.509766"
                y="1"
                width="41"
                height="41"
                rx="20.5"
                stroke="#E2E4EC"
                />
              <g clip-path="url(#clip0_1_7725)">
                <path
                  d="M28.5707 27.53C28.4027 26.606 28.0907 25.742 27.6347 24.938C27.1787 24.134 26.5907 23.444 25.8707 22.868C25.2467 22.328 24.5147 21.896 23.6747 21.572C24.2507 21.128 24.7067 20.579 25.0427 19.925C25.3787 19.271 25.5467 18.572 25.5467 17.828C25.5467 16.964 25.3367 16.169 24.9167 15.443C24.4967 14.717 23.9237 14.144 23.1977 13.724C22.4717 13.304 21.6767 13.094 20.8127 13.094C19.9487 13.094 19.1537 13.304 18.4277 13.724C17.7017 14.144 17.1287 14.717 16.7087 15.443C16.2887 16.169 16.0787 16.964 16.0787 17.828C16.0787 18.572 16.2467 19.271 16.5827 19.925C16.9187 20.579 17.3747 21.128 17.9507 21.572C17.1467 21.908 16.4207 22.34 15.7727 22.868C15.0767 23.444 14.4947 24.128 14.0267 24.92C13.5587 25.712 13.2407 26.552 13.0727 27.44L12.8027 28.862L14.3507 29.168L14.6387 27.764C14.7707 27.032 15.0197 26.354 15.3857 25.73C15.7517 25.106 16.2227 24.557 16.7987 24.083C17.3747 23.609 18.0077 23.249 18.6977 23.003C19.3877 22.757 20.0927 22.634 20.8127 22.634C21.5327 22.634 22.2467 22.76 22.9547 23.012C23.6627 23.264 24.2927 23.618 24.8447 24.074C25.4207 24.554 25.8947 25.115 26.2667 25.757C26.6387 26.399 26.8847 27.08 27.0047 27.8L27.2747 29.204L28.8047 28.898L28.5707 27.53ZM20.8127 14.66C21.3887 14.66 21.9197 14.801 22.4057 15.083C22.8917 15.365 23.2757 15.749 23.5577 16.235C23.8397 16.721 23.9807 17.252 23.9807 17.828C23.9807 18.404 23.8397 18.935 23.5577 19.421C23.2757 19.907 22.8917 20.291 22.4057 20.573C21.9197 20.855 21.3887 20.996 20.8127 20.996C20.2367 20.996 19.7057 20.855 19.2197 20.573C18.7337 20.291 18.3497 19.907 18.0677 19.421C17.7857 18.935 17.6447 18.404 17.6447 17.828C17.6447 17.252 17.7857 16.721 18.0677 16.235C18.3497 15.749 18.7337 15.365 19.2197 15.083C19.7057 14.801 20.2367 14.66 20.8127 14.66Z"
                  fill="#3E445A"
                  />
              </g>
              <defs>
                <clipPath id="clip0_1_7725">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="matrix(1 0 0 -1 12.0098 30.5)"
                    />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <h6 className='mb-0'>${totallCart.toFixed(2)}</h6>
          <div className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            
<div className='position-relative count'>
  <span className="flex" style={{position:'absolute', width:'15px'  , height:'15px'  , backgroundColor:"red" , borderRadius:'50%'  , top:'0px' , right:'2px' , fontSize:'10px' , color:'white'}}>{cartLength}</span>
  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="42" height="42" rx="21" fill="#FFF1EE"/>
<g clip-path="url(#clip0_1_7737)">
<path d="M21.0342 14.411C20.5242 14.411 20.0511 14.5385 19.6147 14.7935C19.1784 15.0485 18.8327 15.3942 18.5777 15.8305C18.3227 16.2668 18.1952 16.74 18.1952 17.25H16.7502C16.7502 16.4793 16.9401 15.7682 17.3197 15.1165C17.6994 14.4648 18.2151 13.9492 18.8667 13.5695C19.5184 13.1898 20.2296 13 21.0002 13C21.7709 13 22.4821 13.1898 23.1337 13.5695C23.7854 13.9492 24.3011 14.4648 24.6807 15.1165C25.0604 15.7682 25.2502 16.4793 25.2502 17.25H28.0382C28.4462 17.25 28.7919 17.3945 29.0752 17.6835C29.3586 17.9725 29.5002 18.3267 29.5002 18.746C29.5002 18.8367 29.4946 18.9217 29.4832 19.001L27.9022 28.147C27.8116 28.6797 27.5622 29.1217 27.1542 29.473C26.7462 29.8243 26.2759 30 25.7432 30H16.2572C15.7246 30 15.2542 29.8243 14.8462 29.473C14.4382 29.1217 14.1889 28.6797 14.0982 28.147L12.5172 19.018C12.4492 18.61 12.5314 18.236 12.7637 17.896C12.9961 17.556 13.3106 17.3463 13.7072 17.267C13.7866 17.2557 13.8716 17.25 13.9622 17.25H23.8732C23.8732 16.74 23.7457 16.2668 23.4907 15.8305C23.2357 15.3942 22.8901 15.0485 22.4537 14.7935C22.0174 14.5385 21.5442 14.411 21.0342 14.411ZM28.0382 18.661H13.9622C13.9509 18.661 13.9339 18.6837 13.9112 18.729V18.763L15.4922 27.909C15.5262 28.0903 15.6056 28.2433 15.7302 28.368C15.8549 28.4927 16.0022 28.5607 16.1722 28.572L16.2572 28.589H25.7432C25.9132 28.589 26.0691 28.5352 26.2107 28.4275C26.3524 28.3198 26.4459 28.1753 26.4912 27.994L28.0892 18.746C28.0892 18.7007 28.0779 18.678 28.0552 18.678L28.0382 18.661Z" fill="#EA2B0F"/>
</g>
<defs>
<clipPath id="clip0_1_7737">
<rect width="17" height="17" fill="white" transform="matrix(1 0 0 -1 12.5 30)"/>
</clipPath>
</defs>
</svg>
</div>
</div>
<div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
{cart.length? 
<>
  <div className="offcanvas-body">

{showDataCart}


<hr />
<div className='d-flex justify-content-around border'>
  <b className='fs-4 m-0'>totall:</b>
  <p className='fs-5 m-0'>${totallCart.toFixed(2)}</p>
</div>
<div>
  <button className='btn btn-dark w-100 mt-4' onClick={()=> navigate("/checkout")}>checkout</button>

</div>
  </div>

</>
:
<div className='text-uppercase text-center mt-5 fs-5 alert alert-danger mx-4 '>There is No Products</div>
}
</div>



        </div>

        {/* Cart Offcanvas */}
        <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {cart.length ? (
            <div className="offcanvas-body">
              {showDataCart}
              <hr />
              <div className="d-flex justify-content-around border">
                <b className="fs-4 m-0">totall:</b>
                <p className="fs-5 m-0">${totallCart.toFixed(2)}</p>
              </div>
              <div>
                <button className="btn btn-dark w-100 mt-4" onClick={() => navigate("/checkout")}>checkout</button>
              </div>
            </div>
          ) : (
            <div className="text-uppercase text-center mt-5 fs-5 alert alert-danger mx-4">There is No Products</div>
          )}
        </div>
      </Container>

      {/* NavPart-4 */}
      <Container fluid className="NavPart-4 d-flex align-items-center py-2 mb-3">
        {/* ALL CATEGORIES Dropdown */}
        <div className="dropdown leftPart d-flex align-items-center justify-content-around col-12 col-md-3 position-relative">
          <button style={{ border: "none", backgroundColor: "transparent" }} className="dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ALL CATEGORIES
          </button>
          <ul className="dropdown-menu w-100">
            {apiCategories?.map((cat, i) => (
              <li key={i}>
                <button className="dropdown-item text-capitalize" onClick={() => handleCategoryClick(cat.slug)}>
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar Menu */}
        <Navbar expand="md" className="col-12 col-md-9">
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto d-flex flex-wrap justify-content-around w-100">
              <ul className="navbar-nav d-flex flex-row flex-wrap gap-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}