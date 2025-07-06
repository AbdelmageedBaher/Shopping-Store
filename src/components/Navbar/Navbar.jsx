

import React from "react";
import "./Navbar.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import  { useContext } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";


export default function navbar() {
 const {cart , deleteFromCart , changeAmount , totallCart , cartLength} = useContext(CartContext)


const checkOutNav = useNavigate()

const showDataCart = cart && cart.map((val , index)=>{return(
  <div key={index} className="card">
  <div className="row g-0">
    <div className="col-md-4">
      <img className='w-100' src={val.thumbnail} />
    </div>
    <div className="col-md-8">
      <div className="card-body position-relative">
        <h5 className="card-title">{val.title}</h5>
        <p className="card-text"> ${val.price.toFixed(0)* val.quantity}</p>
        <div className="card-text flex">
          <button onClick={()=> changeAmount('plus' , val)} className='w-50 btn btn-dark p-0'>+</button>
          <p className='w-50 flex m-0 fs-5 border mx-1 rounded'>{val.quantity}</p>
          <button onClick={()=> changeAmount('min' , val)} className='w-50 btn btn-dark p-0'>-</button>
        </div>
          <div onClick={()=> deleteFromCart(val.id)} style={{width:'20px' , height:'20px', borderRadius:'50%' }} className='position-absolute top-0 flex end-0 fs-4 p-0 mx-3 my-1  btn btn-danger  '>
        <IoMdCloseCircleOutline className="m-0"/>
          </div>
      </div>
      
    </div>
  
  </div>
</div>

)

})
  return (
    <>
      <div className="NavPart-1 d-flex justify-content-center align-items-center text-center">
        Due to current circumstances, there may be slight delays in order
        processing
      </div>
      <Container
        fluid
        className="NavPart-2 d-flex flex-wrap align-items-center py-2"
        >
        <Row className="w-100">
          <Col
            xs={12}
            md={4}
            className="Part-left d-flex align-items-center gap-2 justify-content-center justify-content-md-start mb-2 mb-md-0"
            >
            <Link to="/about">About Us</Link>
            <Link>Compare</Link>
            <Link>Wishlist</Link>
          </Col>

          <Col
            xs={12}
            md={8}
            className="Part-right d-flex align-items-center justify-content-center justify-content-md-end text-center text-md-start gap-2"
            >
            <img src="src/assets/images/hand.png" width={25} height={25} />
            <span className="me-1 ms-1">
              100% Secure delivery without contacting the courier
            </span>{" "}
            |
            <span className="ms-1">
              {" "}
              Need help? Call Us: <span className="cullUs">+1 234 567 89</span>
            </span>
            <div className="lang d-flex align-items-center gap-1">
              USD
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M6.65995 1.73454L4.17067 4.11596C4.04302 4.24354 3.90118 4.30733 3.74516 4.30733C3.58913 4.30733 3.44729 4.24354 3.31964 4.11596L0.830363 1.73454C0.716892 1.62114 0.660156 1.47584 0.660156 1.29865C0.660156 1.12146 0.716892 0.976168 0.830363 0.862767C1.09986 0.593439 1.37644 0.593439 1.66012 0.862767L3.74516 2.86146L5.83019 0.862767C6.11387 0.593439 6.39045 0.593439 6.65995 0.862767C6.77342 0.976168 6.83016 1.12146 6.83016 1.29865C6.83016 1.47584 6.77342 1.62114 6.65995 1.73454Z"
                  fill="#3E445A"
                  />
              </svg>
              English
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M6.65995 1.73454L4.17067 4.11596C4.04302 4.24354 3.90118 4.30733 3.74516 4.30733C3.58913 4.30733 3.44729 4.24354 3.31964 4.11596L0.830363 1.73454C0.716892 1.62114 0.660156 1.47584 0.660156 1.29865C0.660156 1.12146 0.716892 0.976168 0.830363 0.862767C1.09986 0.593439 1.37644 0.593439 1.66012 0.862767L3.74516 2.86146L5.83019 0.862767C6.11387 0.593439 6.39045 0.593439 6.65995 0.862767C6.77342 0.976168 6.83016 1.12146 6.83016 1.29865C6.83016 1.47584 6.77342 1.62114 6.65995 1.73454Z"
                  fill="#3E445A"
                  />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="NavPart-3 d-flex flex-wrap align-items-center justify-content-between py-2"xs={6}
        >
        <Link to="/" className="Partlogo position-relative me-4" >
          <img
            src="src/assets/images/logo.png"
            alt="logo"
            width={100}
            height={50}
            />
        </Link>

        <div className="searchPart d-flex flex-grow-1 mx-3 my-2 my-md-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search for Products, fruit, meat, eggs .etc..."
            />
          <svg
            width="25"
            height="61"
            viewBox="0 0 25 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M21.827 38.804L18.131 35.108C18.755 34.324 19.235 33.46 19.571 32.516C19.939 31.524 20.123 30.516 20.123 29.492C20.123 27.86 19.715 26.34 18.899 24.932C18.115 23.572 17.043 22.5 15.683 21.716C14.291 20.9 12.775 20.492 11.135 20.492C9.49505 20.492 7.97105 20.9 6.56305 21.716C5.21905 22.516 4.14705 23.588 3.34705 24.932C2.53105 26.34 2.12305 27.864 2.12305 29.504C2.12305 31.144 2.53105 32.66 3.34705 34.052C4.13105 35.412 5.20305 36.484 6.56305 37.268C7.97105 38.084 9.49105 38.492 11.123 38.492C12.179 38.492 13.191 38.32 14.159 37.976C15.127 37.632 15.987 37.14 16.739 36.5L20.435 40.196C20.531 40.292 20.643 40.368 20.771 40.424C20.899 40.48 21.019 40.508 21.131 40.508C21.243 40.508 21.363 40.48 21.491 40.424C21.619 40.368 21.731 40.292 21.827 40.196C22.035 40.004 22.139 39.776 22.139 39.512C22.139 39.248 22.035 39.012 21.827 38.804ZM4.13905 29.492C4.13905 28.212 4.45105 27.036 5.07505 25.964C5.69905 24.908 6.53905 24.068 7.59505 23.444C8.66705 22.82 9.84305 22.508 11.123 22.508C12.403 22.508 13.587 22.82 14.675 23.444C15.731 24.068 16.571 24.912 17.195 25.976C17.819 27.04 18.131 28.212 18.131 29.492C18.131 30.42 17.951 31.316 17.591 32.18C17.231 33.044 16.747 33.78 16.139 34.388C15.499 35.044 14.759 35.544 13.919 35.888C13.079 36.232 12.187 36.404 11.243 36.404C9.93105 36.436 8.72305 36.14 7.61905 35.516C6.54705 34.924 5.69905 34.092 5.07505 33.02C4.45105 31.948 4.13905 30.772 4.13905 29.492Z"
              fill="#3E445A"
              />
          </svg>
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
  <span className="flex" style={{color:'red' , position:'absolute', width:'15px'  , height:'15px'  , backgroundColor:"red" , borderRadius:'50%'  , top:'0px' , right:'2px' , fontSize:'10px' , color:'white'}}>{cartLength}</span>
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
  <button className='btn btn-dark w-100 mt-4' onClick={()=> checkOutNav("/checkout")}>checkout</button>

</div>
  </div>

</>
:
<div className='text-uppercase text-center mt-5 fs-5 alert alert-danger mx-4 '>There is No Products</div>
}
</div>



        </div>
      </Container>
      
      <Container
        fluid
        className="NavPart-4 d-flex align-items-center py-2 mb-3"
        >
    <div className="leftPart  d-flex align-items-center justify-content-around col-12 col-md-3 position-relative">
           
  {/* <div key={index} className="card">
  <div className="row g-0">
  <div className="col-md-4">
  <img className='w-100' src={val.thumbnail} />
  </div>
  <div className="col-md-8">
  <div className="card-body position-relative">
  <h5 className="card-title">{val.title}</h5>
  <p className="card-text"> ${val.price.toFixed(0) * val.amount}</p>
  <div className="card-text flex">
  <button onClick={()=> changeAmount('plus' , val)} className='w-50 btn btn-dark p-0'>+</button>
  <p className='w-50 flex m-0 fs-5 f'>{val.amount}</p>
  <button onClick={()=> changeAmount('min' , val)} className='w-50 btn btn-dark p-0'>-</button>
  </div>
  <div onClick={()=> deleteFromCart(val)} className='position-absolute top-0 end-0 p-2 fs-4 '>
  <IoMdCloseCircleOutline/>
  </div>
  </div>
  
  </div>
  
  </div>
  </div> */}
   <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.493 9.74299H0.507C0.368333 9.74299 0.249167 9.79282 0.1495 9.89249C0.0498333 9.99216 0 10.1113 0 10.25C0 10.3887 0.0498333 10.5078 0.1495 10.6075C0.249167 10.7072 0.368333 10.757 0.507 10.757H12.493C12.6403 10.757 12.7617 10.7072 12.857 10.6075C12.9523 10.5078 13 10.3865 13 10.2435C13 10.1005 12.9523 9.98132 12.857 9.88599C12.7617 9.79066 12.6403 9.74299 12.493 9.74299ZM12.493 5.67399H0.507C0.368333 5.67399 0.249167 5.72382 0.1495 5.82349C0.0498333 5.92315 0 6.04232 0 6.18099C0 6.31966 0.0498333 6.44099 0.1495 6.54499C0.249167 6.64899 0.368333 6.70099 0.507 6.70099H12.493C12.6317 6.70099 12.7508 6.65116 12.8505 6.55149C12.9502 6.45182 13 6.32832 13 6.18099C13 6.03366 12.9523 5.91232 12.857 5.81699C12.7617 5.72165 12.6403 5.67399 12.493 5.67399ZM12.493 13.799H0.507C0.368333 13.799 0.249167 13.8488 0.1495 13.9485C0.0498333 14.0482 0 14.1673 0 14.306C0 14.4447 0.0498333 14.566 0.1495 14.67C0.249167 14.774 0.368333 14.826 0.507 14.826H12.493C12.6317 14.826 12.7508 14.7762 12.8505 14.6765C12.9502 14.5768 13 14.4555 13 14.3125C13 14.1695 12.9502 14.0482 12.8505 13.9485C12.7508 13.8488 12.6317 13.799 12.493 13.799Z" fill="white"/>
</svg>
<span className=''>All Categories</span>
<svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.40473 0.218634L5.25 3.9184L9.11605 0.218634C9.26848 0.0384951 9.43476 0.0384951 9.6149 0.218634C9.79504 0.371058 9.79504 0.53734 9.6149 0.717479L5.49942 4.79138C5.347 4.94381 5.18072 4.94381 5.00058 4.79138L0.885104 0.717479C0.704965 0.53734 0.704965 0.371058 0.885104 0.218634C1.05139 0.052352 1.2246 0.052352 1.40473 0.218634Z" fill="white"/>
</svg>
<span className='totalProdct'>TOTAL 50 PRODUCTS</span>




   
     </div> 
    

        <Navbar expand="md" className="col-12 col-md-9">
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto d-flex flex-wrap justify-content-around w-100" xs={6}>
              <ul className="navbar-nav d-flex flex-row flex-wrap gap-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>      
    </>
  );
}
