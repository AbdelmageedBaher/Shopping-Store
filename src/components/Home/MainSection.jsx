import useProducts from "../../hooks/useQuerypProducts";
import Loading from "../Loading/Loading";
import StarRatings from "react-star-ratings";
import main1 from "../../assets/images/main1.png";
import main2 from "../../assets/images/main2.png";

const MainSection = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container my-5">
      <div className="d-flex flex-wrap border border-danger border-3 rounded-3 p-3 gap-3">
        {data.slice(20, 25).map((prod) => (
          <div
            key={prod.id}
            className="p-2"
            style={{
              flex: "1 1 200px", 
              maxWidth: "250px",
            }}
          >
            <div className="h-100 bg-white rounded-3 shadow-sm p-2">
              <p
                style={{
                  backgroundColor: "#35AFA0",
                  width: "55px",
                  height: "30px",
                }}
                className="rounded-3 text-center text-white mb-2"
              >
                {prod.discountPercentage}%
              </p>

              <img
                src={prod.images}
                className="img-fluid rounded mb-2"
                alt={prod.title}
                style={{
                  height: "150px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />

              <h6 className="text-center" style={{ color: "#202435" }}>
                {prod.title}
              </h6>

              <p className="text-success text-center">{prod.stock} In Stock</p>

              <div className="d-flex justify-content-between align-items-center px-2">
                <StarRatings
                  rating={prod.rating}
                  starRatedColor="#ffd700"
                  starDimension="20px"
                  starSpacing="2px"
                />
                <small>{Math.trunc(prod.rating)} reviews</small>
              </div>

              <p
                className="text-center fw-bold mt-2"
                style={{ color: "#D51243" }}
              >
                {prod.price}$
              </p>

              <div
                className="rounded-3 mx-auto my-2"
                style={{
                  backgroundColor: "#9B9BB4",
                  width: "75%",
                  height: "6px",
                }}
              ></div>

              <p className="text-center" style={{ color: "#202435" }}>
                the available products:{" "}
                <span
                  style={{
                    color: "#35AFA0",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {prod.stock}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
