import React from "react";
import header1 from "../../../assets/images/slider-image-1.png";
import banner1 from "../../../assets/images/banner1.png";
import { FaArrowRight } from "react-icons/fa";
import CountdownTimer from "../CountdownTimer";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container text-center position-relative">
        <div className="row">
          <div className="col-12 position-relative">
            <img
              src={header1}
              className="img-fluid rounded-3 w-100"
              alt="header"
            />
            <div className="position-absolute top-50 start-0 translate-middle-y ps-md-5 ps-3 text-start w-100">
              <div className="text-dark">
                <p>
                  EXCLUSIVE OFFER{" "}
                  <button
                    className="btn btn-sm rounded-pill px-3 py-1 fw-semibold"
                    style={{
                      backgroundColor: "#E6F4EC",
                      color: "#038E42",
                    }}
                  >
                    -20% Off
                  </button>
                </p>
                <h1 className="fw-bold">
                  Specialist in the <br />
                  grocery store
                </h1>
                <p>Only this week. Don’t miss...</p>
                <p>
                  from{" "}
                  <span
                    className="fw-bold"
                    style={{ color: "var(--body-color)", fontSize: "24px" }}
                  >
                    $7.99
                  </span>
                </p>
                <Link to="/shop">
                  <button
                    className="rounded-pill px-4 py-2 text-white border-0"
                    style={{ backgroundColor: "var(--main-color)" }}
                  >
                    Shop Now <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="container my-4 p-3 rounded-3 d-flex flex-column flex-md-row justify-content-between align-items-center"
        style={{ backgroundColor: "#F8EFEA" }}
      >
        <h5
          className="text-center text-md-start mb-3 mb-md-0"
          style={{ color: "#00B853" }}
        >
          <span className="fw-bold">100% Secure delivery</span> without
          contacting the courier
        </h5>

        <img
          src={banner1}
          className="img-fluid mb-3 mb-md-0"
          style={{ height: "100px", width: "250px" }}
          alt="banner"
        />

        <Link to='/shop'>
        <button
          className="btn rounded-pill px-4 py-2 text-white fw-semibold"
          style={{
            backgroundColor: "#00B853",
          }}
        >
          Shop Now
        </button>
        </Link>
      </div>

      {/* Countdown Section */}
      <div className="container py-4">
        <div className="row justify-content-center align-items-center text-center text-md-start">
          <div className="col-md-6 px-3">
            <h2 className="fw-light" style={{ color: "#233A95" }}>
              Special Offers of the Week!
            </h2>
            <p style={{ color: "#9B9BB4" }}>
              Ut placerat, magna quis porttitor vulputate, magna nunc auctor
              ante.
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <CountdownTimer targetDate="2025-08-20T00:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
