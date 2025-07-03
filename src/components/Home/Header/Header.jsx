import React from "react";
import header1 from "../../../assets/images/slider-image-1.png";
import banner1 from "../../../assets/images/banner1.png";
import { FaArrowRight } from "react-icons/fa";
import CountdownTimer from "../CountdownTimer";

const Header = () => {
  return (
    <div>
      <div className="m-auto text-center container position-relative">
        <img src={header1} className="w-100 position-relative rounded-3" />
        <div className="position-absolute top-50 start-0  translate-middle-y ps-5 text-start">
          <p style={{ color: "var(--dark-color)" }}>
            EXCLUSIVE OFFER{" "}
            <button
              className="rounded-pill px-2 border border-none py-1"
              style={{ backgroundColor: "#00B85333 ", color: "#038E42" }}
            >
              -20% Off
            </button>
          </p>
          <h1 style={{ color: "var(--dark-color)", fontWeight: "bold" }}>
            Specialist in the <br />
            grocery store
          </h1>
          <p style={{ color: "var(--dark-color)" }}>
            Only this week. Don’t miss...
          </p>
          <p style={{ color: "var(--dark-color)" }}>
            from{" "}
            <span
              style={{
                color: "var(--body-color)",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              $7.99
            </span>
          </p>
          <button
            className="rounded-pill px-4 border border-none py-2 text-white"
            style={{ backgroundColor: "var(--main-color)" }}
          >
            shop Now <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        className="position-relative container rounded-3 my-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#F8EFEA" }}
      >
        <div>
          <h1
            style={{
              color: "#00B853",
              fontWeight: "lighter",
              fontSize: "20px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>100% Secure delivery</span>{" "}
            without contacting the courier
          </h1>
        </div>
        <div>
          <img src={banner1} style={{ height: "100px", width: "250px" }} />
        </div>
        <div>
          <button
            className="rounded-pill px-4 border border-none py-2 text-white"
            style={{ backgroundColor: "#00B853" }}
          >
            shop Now
          </button>
        </div>
      </div>
      <div className="d-flex py-3 container">
        <div className="text-center m-auto d-flex align-items-center">
          <div className="text-end px-3">
            <h2 style={{ color: "#233A95", fontWeight: "lighter" }}>
              Special Offers of the Week!
            </h2>
            <p style={{ color: "#9B9BB4" }}>
              Ut placerat, magna quis porttitor vulputate, magna nunc auctor
              ante.
            </p>
          </div>
          <CountdownTimer targetDate="2025-07-01T00:00:00" />
        </div>
      </div>
    </div>
  );
};

export default Header;
