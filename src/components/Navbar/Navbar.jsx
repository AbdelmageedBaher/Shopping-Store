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
            <svg width="42" height="43"> {/* Icon here */}</svg>
          </Link>
          <h6 className="mb-0">${totallCart.toFixed(2)}</h6>
          <div className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <div className="position-relative count">
              <span className="flex" style={{ position: "absolute", top: "0px", right: "2px", width: "15px", height: "15px", backgroundColor: "red", color: "white", borderRadius: "50%", fontSize: "10px" }}>{cartLength}</span>
              <svg width="42" height="43"> {/* cart icon */} </svg>
            </div>
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