import React from "react";
import useProducts from "../../../hooks/useQuerypProducts";
import Loading from "../../Loading/Loading";
import { Navigation, Pagination, Scrollbar} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider1.css";

const Slider1 = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      navigation
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
      className="box-container my-3 border border-2 p-0 rounded-3"
    >
      {data.slice(19, 30).map((prod) => (
        <SwiperSlide key={prod.id}>
          <div className="text-center px-3 py-2">
            <img
              src={prod.images}
              alt={prod.title}
              style={{
                width: "75%",
                height: "160px",
                objectFit: "cover",
              }}
            />
            <h2 style={{ color: "#202435", fontSize: "20px" }}>{prod.title}</h2>
            <p style={{ color: "#202435", fontSize: "15px" }}>
              {prod.stock} Items
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider1;
