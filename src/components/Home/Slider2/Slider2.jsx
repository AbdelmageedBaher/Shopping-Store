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
const Slider2 = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 style={{ fontWeight: "400" }}>FEATURED PRODUCTS</h1>
          <p style={{ color: "#9B9BB4" }}>
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#9B9BB4",
              borderColor: "#D9D9E9",
            }}
            className="px-5 py-2 rounded-pill border border-none"
          >
            View All <FaArrowRight />{" "}
          </button>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container my-3 border border-2  p-0 rounded-3"
      >
        {data.map((prod, id) => {
          return (
            <div key={prod.id} className="border-end ">
              <SwiperSlide>
                <div className="border-start py-3">
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
                  <img src={prod.images} style={{ width: "100%" }} />
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
                      starDimension="25px"
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
                    style={{ backgroundColor: "#FFCD00", color: "#202435 " }}
                    className="rounded-pill border border-none px-5 py-2"
                  >
                    ADD to Cart
                  </button>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <div
        className="text-center my-4 py-3 rounded-3"
        style={{ backgroundColor: "#FFEEF2" }}
      >
        <h1 style={{ color: "#ED174A", fontSize: "25px", fontWeight: "bold" }}>
          Save an Extra 5-10 % On Every Autoship Order!
        </h1>
      </div>

      <div className="d-flex justify-content-between container">
        <div className="px-3" style={{ flex: 1 }}>
          <img
            src={bottle}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
             className="rounded-2 "
          />
          <p style={{ color: "#9B9BB4" }}>Grocery</p>
          <h2
            style={{ color: "#202435", fontSize: "25px", fontWeight: "bold" }}
          >
            But I must explain to you how all this mistaken idea
          </h2>
          <p style={{ color: "#71778E" }}>
            Jan 13 2025 <span style={{ color: "#202435" }}>Sinan ISIK</span>
          </p>
        </div>

        <div className="px-3" style={{ flex: 1 }}>
          <img
            src={choclate}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            className="rounded-3"
          />
          <p style={{ color: "#9B9BB4" }}>Grocery</p>
          <h2
            style={{ color: "#202435", fontSize: "25px", fontWeight: "bold" }}
          >
            The Problem With Typefaces on the Web
          </h2>
          <p style={{ color: "#71778E" }}>
            Jan 13 2025 <span style={{ color: "#202435" }}>Sinan ISIK</span>
          </p>
        </div>

        <div className="px-3" style={{ flex: 1 }}>
          <img
            src={icecream}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
             className="rounded-3"
          />
          <p style={{ color: "#9B9BB4" }}>Grocery</p>
          <h2
            style={{ color: "#202435", fontSize: "25px", fontWeight: "bold" }}
          >
            English Breakfast Tea With Tasty Donut Desserts
          </h2>
          <p style={{ color: "#71778E" }}>
            Jan 13 2025 <span style={{ color: "#202435" }}>Sinan ISIK</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
