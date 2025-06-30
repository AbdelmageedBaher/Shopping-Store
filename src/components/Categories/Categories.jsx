import useProductsByCategory from "../../hooks/useQueryProductsByCategory";
import { useEffect, useState } from "react";
import useCategories from "../../hooks/useQueryCategories";
// import StarRatings from "react-star-ratings";
import "./Categories.css";
import Loading from "../Loading/Loading";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProductsByCategory(selectedCategory?.slug);
  let { data: categories } = useCategories();

  useEffect(() => {
    if (!selectedCategory && categories?.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  if(productsLoading){
    return <Loading />
  }

  return (
    <>
    <HeaderSlider/>
    
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-5">
          <h4 className="text-capitalize font-bold fs-3 color-title py-2">
            Categories
          </h4>
          <ul className="list-group ">
            {categories?.map((cat) => {
              const isChecked = selectedCategory?.slug === cat.slug;

              return (
                <li
                  key={cat.slug}
                  className={`list-group-item border-bottom-0 rounded-0 d-flex align-items-center ${
                    isChecked ? " color-title" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                  >
                  <div className="form-check d-flex align-items-center">
                    <input
                      className={`form-check-input me-2 ${
                          isChecked ? "back-title " : ""
                        }`}
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        />
                    <label
                        style={{ cursor: "pointer" }}
                      className={`form-check-label fw-semibold ${
                        isChecked ? "color-title" : "text-dark"
                      }`}
                    >
                      {cat.name}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Products */}
        <div className="col-md-9 col-7">
          <h4 className="text-capitalize font-bold fs-3 color-title py-2">
            {selectedCategory
              ? `${selectedCategory.name} Products`
              : "Select a Category"}
          </h4>

          {productsError && <p>Failed to load products.</p>}

          <div className="row">
            {products?.map((product) => (
              <div
                key={product.id}
                className="col-md-6 col-lg-4 col-12 border border-1 py-3 pointer-product"
              >
                <div>
                  <span className="px-2 py-1 rounded-1 color-discount text-white">
                    %{product?.discountPercentage}
                  </span>
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
                  <h5 className="fw-bold text-center color-price pt-3">
                    {product?.price} $
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
    

  );
}
