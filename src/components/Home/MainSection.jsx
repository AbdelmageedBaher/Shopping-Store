
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
    <div>
      <div className="d-flex container border border-danger border-3 rounded-3 p-0 my-5">
        {data.slice(20, 25).map((prod, id) => {
          return (
            <div key={prod.id} className="border-end">
              <div>
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
                <div className="text-center pt-3 d-flex justify-content-between px-3">
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
                <div
                  style={{
                    backgroundColor: "#9B9BB4",
                    width: "75%",
                    height: "6px",
                  }}
                  className="rounded-3 mx-auto"
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
          );
        })}
      </div>
      <div className="d-flex justify-content-between container">
        <div className="m-auto text-center container position-relative">
          <img src={main1} className="w-100 position-relative rounded-3" />
          <div className="position-absolute top-50 start-0  translate-middle-y ps-5 text-start">
            <h1 style={{ color: "var(--dark-color)", fontWeight: "bold" }}>
              The freshest <br />
              milk products
            </h1>
            <p style={{ color: "#9B9BB4" }}>A family place for grocery</p>
            <button
              className="rounded-pill px-4 border border-none py-2 text-white"
              style={{ backgroundColor: "#ED174A" }}
            >
              shop Now
            </button>
          </div>
        </div>
        <div className="m-auto text-center container position-relative">
          <img src={main2} className="w-100 position-relative rounded-3" />
          <div className="position-absolute top-50 start-0  translate-middle-y ps-5 text-start">
            <h1 style={{ color: "var(--dark-color)", fontWeight: "bold" }}>
              Yogurt with <br />
              Delicious Fruit
            </h1>
            <p style={{ color: "#9B9BB4" }}>
              A different kind of grocery store
            </p>
            <button
              className="rounded-pill px-4 border border-none py-2 text-white"
              style={{ backgroundColor: "#ED174A" }}
            >
              shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
