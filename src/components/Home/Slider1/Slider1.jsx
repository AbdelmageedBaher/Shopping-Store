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
import './Slider1.css'
const Slider1 = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
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
      {data.slice(19 , 30).map((prod) => (
        
            <SwiperSlide>
                <div className="border-start text-center">
                    <img src={prod.images} style={{width:'75%'}} />
                    <h2 style={{color:'#202435' , fontSize:'20px'}}>{prod.title}</h2>
                    <p style={{color:'#202435' , fontSize:'15px' , fontWeight:"lighter"}}>{prod.stock} Items</p>
                </div>
            </SwiperSlide>
            
         
      ))}
    </Swiper>
  );
};

export default Slider1;
