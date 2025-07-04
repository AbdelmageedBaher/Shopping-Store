import React from "react";
import useProducts from "../../../hooks/useQuerypProducts";
import Loading from "../../Loading/Loading";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider2.css";

import { FaArrowRight } from "react-icons/fa";
import StarRatings from "react-star-ratings";

import bottle from "../../../assets/images/bottles.png";
import choclate from "../../../assets/images/chocolate.png";
import icecream from "../../../assets/images/ice-cream.png";
import { Link } from "react-router-dom";
const Slider2 = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="container my-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
          <div className="mb-3 mb-md-0">
            <h1 style={{ fontWeight: "400" }}>FEATURED PRODUCTS</h1>
            <p style={{ color: "#9B9BB4" }}>
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div>
            <Link to="/shop" className="text-decoration-none">
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#9B9BB4",
                  borderColor: "#D9D9E9",
                }}
                className="px-4 py-2 rounded-pill border"
              >
                View All <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <Swiper
          modules={[Navigation, A11y]} // شيلنا Pagination و Scrollbar
          spaceBetween={30}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className="container my-3 border border-2 p-0 rounded-3"
        >
          {data.map((prod) => (
            <SwiperSlide key={prod.id}>
              <div className="border-start py-3 px-2 h-100 d-flex flex-column justify-content-between">
                <p
                  style={{
                    backgroundColor: "#35AFA0",
                    width: "55px",
                    height: "30px",
                  }}
                  className="rounded-3 text-center text-white my-2 mx-2"
                >
                  {prod.discountPercentage}%
                </p>
                <img
                  src={prod.images}
                  alt={prod.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h1
                  style={{
                    color: "#202435",
                    fontSize: "20px",
                    fontWeight: "normal",
                  }}
                  className="text-center"
                >
                  {prod.title}
                </h1>
                <p style={{ color: "#00B853" }} className="text-center">
                  {prod.stock} In Stock
                </p>
                <div className="text-center pt-3 d-flex justify-content-between px-2">
                  <StarRatings
                    rating={prod.rating}
                    starRatedColor="#ffd700"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <p>{Math.trunc(prod.rating)} review</p>
                </div>
                <p
                  style={{ color: "#D51243", fontWeight: "bold" }}
                  className="text-center"
                >
                  {prod.price}$
                </p>
                <button
                  style={{
                    backgroundColor: "#FFCD00",
                    color: "#202435",
                    fontWeight: "500",
                    fontSize: "14px",
                    padding: "8px 16px",
                    border: "none",
                    maxWidth: "150px",
                    width: "100%",
                  }}
                  className="rounded-pill mx-auto mt-3"
                >
                  ADD to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;
