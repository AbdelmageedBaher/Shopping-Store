import Slider from "react-slick"
import imgSlider1 from "../../../assets/images/slider-image-1.png";
import imgSlider2 from "../../../assets/images/slider-image-2.png";
import imgSlider3 from "../../../assets/images/slider-image-3.png";
import "./HeaderSlider.css";
import { Link } from "react-router-dom";

export default function  HeaderSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="box-container d-xl-block d-none HeaderSlider">
      <Slider {...settings}>
        <div className="position-relative">
          <img
            src={imgSlider1}
            height={500}
            className="w-100 object-fit-cover"
            alt=""
          />
          <div className="position-absolute overlay  ps-3 bottom-0  end-0">
            <div className="d-flex justify-content-start py-2 ps-1 ">
              <span className="text-uppercase py-1 pe-2 color-span">
                Exclusive Offer
              </span>
              <span className="color-offer back-offer rounded-4 px-2 py-1">
                -20% OFF
              </span>
            </div>
            <h2 className="title-fonts py-1">
              Specialist in the grocery store
            </h2>
            <span className="color-span">Only this week. Don’t miss...</span>
            <p className="pt-2 pb-1">
              from <span className="color-price fs-2 fw-semibold">$7.99</span>
            </p>
            <Link
              to={"/shop"}
              className="py-2 px-4 color-discount text-white rounded-5 border-0 text-decoration-none fw-light"
            >
              Shop Now <i class="fa-solid fa-arrow-right fa-sm"></i>
            </Link>
          </div>
        </div>

        <div className="position-relative">
          <img
            src={imgSlider2}
            height={500}
            className="w-100 object-fit-cover"
            alt=""
          />
          <div className="position-absolute overlay  ps-3 bottom-0  end-0">
            <div className="d-flex justify-content-start py-2 ps-1 ">
              <span className="text-uppercase py-1 pe-2 color-span">
                Exclusive Offer
              </span>
              <span className="color-offer back-offer rounded-4 px-2 py-1">
                -20% OFF
              </span>
            </div>
            <h2 className="title-fonts py-1">
              Specialist in the grocery store
            </h2>
            <span className="color-span">Only this week. Don’t miss...</span>
            <p className="pt-2 pb-1">
              from <span className="color-price fs-2 fw-semibold">$7.99</span>
            </p>
            <Link
              to={"/shop"}
              className="py-2 px-4 color-discount text-white rounded-5 border-0 text-decoration-none fw-light"
            >
              Shop Now <i class="fa-solid fa-arrow-right fa-sm"></i>
            </Link>
          </div>
        </div>

        <div className="position-relative">
          <img
            src={imgSlider3}
            height={500}
            className="w-100 object-fit-cover"
            alt=""
          />
          <div className="position-absolute overlay  ps-3 bottom-0  end-0">
            <div className="d-flex justify-content-start py-2 ps-1 ">
              <span className="text-uppercase py-1 pe-2 color-span">
                Exclusive Offer
              </span>
              <span className="color-offer back-offer rounded-4 px-2 py-1">
                -20% OFF
              </span>
            </div>
            <h2 className="title-fonts py-1">
              Specialist in the grocery store
            </h2>
            <span className="color-span">Only this week. Don’t miss...</span>
            <p className="pt-2 pb-1">
              from <span className="color-price fs-2 fw-semibold">$7.99</span>
            </p>
            <Link
              to={"/shop"}
              className="py-2 px-4 color-discount text-white rounded-5 border-0 text-decoration-none fw-light"
            >
              Shop Now <i class="fa-solid fa-arrow-right fa-sm"></i>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
