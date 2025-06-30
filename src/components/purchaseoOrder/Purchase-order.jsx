import "./purchase-order.css"
import React, { createContext, useContext, useState, useEffect } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useProducts from "../../hooks/useQuerypProducts";

const ProductContext = createContext()
;
export const order = () => useContext(ProductContext);

function PurchaseOrder({ children }) {
    const products = useProducts(); 
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [qty, setQty] = useState(1);
const { data: allProducts = [] } = useProducts();

    const handleClick = (product) => {
    setSelectedProduct(product);
    setQty(1);
  };

  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("lastViewed", JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const alreadyInCart = cart.some((item) => item.id === selectedProduct.id);

  if (alreadyInCart) {
    alert("⚠️ This product is already in the cart");
    return;
  }

  const productWithQty = { ...selectedProduct, quantity: qty };
  localStorage.setItem("cart", JSON.stringify([...cart, productWithQty]));
  alert("✅ The product has been added to the cart");
};




  const handleClose = () => setSelectedProduct(null);

// const relatedProducts = selectedProduct?.relatedProducts?.slice(0, 5) || [];

// console.log("Related products:", selectedProduct?.relatedProducts);

// const productss = useProducts();
// console.log("products from API:", productss?.data);
const relatedProducts = allProducts
  .filter(
    (p) =>
      p.category === selectedProduct?.category &&
      p.id !== selectedProduct?.id
  )
  .slice(0, 5);

  return (
<ProductContext.Provider value={{ selectedProduct, setSelectedProduct, handleClick }}>
      {children}

      {selectedProduct && (
        <Modal show={true} onHide={handleClose} size="xl" centered>
          <Modal.Body>
             <Button  className="d-block  justify-content-end" style={{width :"3px" , float : "right" , backgroundColor: "transparent" , border : "none" , color :"black" , marginRight: "-4px"}} onClick={handleClose}>
  x
</Button>
            <div className="row align-items-start mt-4">

  <div className="col-md-6">
              <img className="img-fluid"
                src={selectedProduct.images}
                alt={selectedProduct.name}
style={{
    width: "646px",
    height: "580.39px",
    paddingBottom: "12px",
    paddingLeft: "20px",
    objectFit: "contain",
    borderRadius: "8px"
  }}                />
            </div>
              
      <div className="col-md-6 mt-10" style={{ paddingLeft: "40px" }}>

  
                <h4>{selectedProduct.title}</h4>
{/* <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.Title || selectedProduct.name}</Modal.Title>
            </Modal.Header> */}
                <p className="price fw-bold fs-5">
                    ${selectedProduct.price}
                </p>
                {/* {selectedProduct.brand && (
                  <p>From: {selectedProduct.brand.join(", ")}</p>
                  )} */}
                  <div className="mb-3">
            <strong>Brand:</strong>{selectedProduct.brand}
          </div>
  
         <div className="d-flex w-100 my-2 align-items-center justify-content-center btn btn-light "
         >
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="btn btn-sm">-</button>
          <span className="mx-2">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="btn btn-sm">+</button>
        </div>

         <div className="">
          <Button className="d-block w-100 my-2"
         variant="success" onClick={handleAddToCart}>Add to Cart</Button>
          <Button
          className=" w-50 my-2 btn-light">♡ Wishlist</Button>
          <Button 
          className=" w-50 my-2 btn-light">⇪ Share</Button>
        </div>
                {selectedProduct.tags && (
                  <div >
                    <p className="text-secondary m-2 d-inline">Tags:</p>
            {Array.isArray(selectedProduct.tags)
              ? selectedProduct.tags.map((tag, i) => (
                <span key={i} className="badge bg-light text-secondary border me-2">
                    {tag}
                  </span>
                ))
                : <span className="badge bg-light text-dark border">{selectedProduct.tags}</span>}
          </div>
        )}
               <div className="m-1">
  <strong>Product Details:</strong>
  <p className="text-secondary">{selectedProduct.description}</p>
</div>

        </div>
            </div>
          </Modal.Body>
    <ModalFooter className="flex-column align-items-start px-1 w-100 ">
            {relatedProducts.length > 0 && (
              <>
                <h5 className="mb-3">Related Products</h5>
                <div className="d-flex overflow-auto w-100">
                  {relatedProducts.map((product) => (
                    <div
                      key={product.id}
                      style={{ width: "120px", cursor: "pointer" }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.images}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{ height: "100px", objectFit: "cover" }}
                      />
                      <p className="small text-center text-black mt-1">
                        {product.price}
                      </p>
                      <p className="small text-center text-muted mt-1">
                        {product.title}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ModalFooter>

        </Modal>
      )}
    </ProductContext.Provider>
  );
}

export default PurchaseOrder;
