import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

export default function SliderProducts() {
  async function getProductslimits() {
    let res = await axios.get(
      "https://dummyjson.com/products?limit=10&skip=10"
    );
    return res;
  }

  let { data } = useQuery({
    queryKey: ["products?limit"],
    queryFn: getProductslimits,
  });

  const CustomArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, display: "block", background: "red" }}
  />
);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:true,
    autoplaySpeed:2000,
    autoplay:true
  };

  return (
    <div className="container py-5 mx-auto d-none d-lg-block">
      <Slider {...settings}>
        {data?.data?.products?.map((product) => {
          return (
            <div key={product?.id} className="border border-1">
              <img
                src={product?.thumbnail}
                className="w-100 object-fit-cover p-3"
                alt={product?.title}
              />
              <h3 className="text-center  py-1">{product?.category}</h3>
              <p className="pb-2 text-center color-sub fw-semibold ">{product?.stock} Items</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
