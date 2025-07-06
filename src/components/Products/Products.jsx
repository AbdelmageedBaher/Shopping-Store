
import "./Product.css";
import StarRatings from "react-star-ratings";
import useProducts from "../../hooks/useQuerypProducts";
import { order } from "../purchaseOrder/Purchase-order";
import Loading from "../Loading/Loading";
import { FaArrowRight } from "react-icons/fa";



export default function Products() {
    let {data , isLoading} = useProducts()
    const { handleClick } = order();

  if(isLoading){
    return <Loading />
  }

  return (
    
    <div className="box-container mx-auto py-2">
      <div className="d-flex justify-content-between my-4">
        <div>
                <h1 style={{ fontWeight: "400" }}>Best Sellers</h1>
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
      <div className="row">
        {data?.map((product) => {
          const handleProductClick = () => {
            handleClick(product);
          };
          return (
            <div
              key={product.id}
              className="col-md-4 col-lg-3 col-6 border border-1 py-3 pointer-product"
              onClick={handleProductClick}
            >
              <div>
                <span className="px-2 py-1 rounded-1 color-discount text-white">%{product?.discountPercentage}</span>
                <img
                  src={product?.images[0]}
                  className="p-2 w-100  object-fit-cover"
                />
                <p className="p-1 text-center bg-dark-color fs-5">
                  {product.description.slice(2, 55)}...
                </p>
                <h6 className="text-center color-title fw-bold">
                  {product?.title}
                </h6>
                <div className=" pt-3 d-flex justify-content-center">
                  <StarRatings
                    rating={product?.rating}
                    starRatedColor="#ffd700"
                    starDimension="19px"
                    starSpacing="5px"
                  />
                  <span className="ps-2 py-1 light-color">{product?.reviews[0].rating} review</span>
                </div>
                <h5 className="fw-bold text-center color-price pt-3">{product?.price} $</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
