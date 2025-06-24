
import "./Product.css";
import StarRatings from "react-star-ratings";
import useProducts from "../../hooks/useQuerypProducts";

export default function Products() {
  
    let {data , isLoading} = useProducts()

  console.log(data);

  return (
    <div className="container mx-auto py-2">
      <div className="row">
        {data?.map((product) => {
          return (
            <div
              key={product.id}
              className="col-md-4 col-lg-3 col-6 border border-1 py-3 pointer-product"
            >
              <div>
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
                <div className="text-center pt-3">
                    <StarRatings
                  rating={product?.rating}
                  starRatedColor="#ffd700"
                  starDimension="25px"
                  starSpacing="15px"
                />
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
