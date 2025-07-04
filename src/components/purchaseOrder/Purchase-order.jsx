import "./purchase-order.css";
import React, { createContext, useContext, useState, useEffect } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useProducts from "../../hooks/useQuerypProducts";


const ProductContext = createContext()
;
export const order = () => useContext(ProductContext);

function PurchaseOrder({ children }) {

    // Fetch all products 
    const products = useProducts(); 

    // Local state for selected product and quantity
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { data: allProducts = [] } = useProducts();

    const handleClick = (product) => {
    setSelectedProduct(product);
    setQty(1);
  };

    // Save the last viewed product 
    useEffect(() => {
      if (selectedProduct) {
        localStorage.setItem("lastViewed", JSON.stringify(selectedProduct));
      }
    }, [selectedProduct]);

    // Handle adding product to cart 
    const handleAddToCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
    };

    const handleClose = () => setSelectedProduct(null);

    // Filter related product
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
        <Modal.Body style={{marginBottom: "0px" , paddingBottom: "0px"}}>

          <Button  className="d-block  justify-content-end" style={{width :"3px" , float : "right" , backgroundColor: "transparent" , border : "none" , color :"black" , marginRight: "-4px", marginTop:"0"}} onClick={handleClose}>
            <IoMdClose />
          </Button>

          <div className="row align-items-start mt-4">
            <div className="col-md-6">
              <img className="img-fluid"  src={selectedProduct.images[0]}
              alt={selectedProduct.name}
              style={{
                width: "646px",
                height: "580.39px",
                paddingBottom: "12px",
                paddingLeft: "20px",
                objectFit: "contain",
                borderRadius: "8px"}} />
            </div>

            <div className="col-md-6 mt-10" style={{ paddingLeft: "40px" }}>
              <h4>{selectedProduct.title}</h4>
              <p className="price fw-bold fs-5">
                ${selectedProduct.price}
              </p>

              <div className="mb-3">
                <strong>Brand:</strong>{selectedProduct.brand}
              </div>
  
              <div className="d-flex w-100 my-2 align-items-center justify-content-center btn btn-light "
              style={{height: "50px"}}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="btn btn-lg">-</button>
                  <span className="mx-2">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="btn btn-lg">+</button>
              </div>

              <div>
              <Button className="d-block w-100 my-2 border-0"
              style={{ backgroundColor : "#35AFA0" , height:" 50px" }}
              onClick={handleAddToCart}>
                <MdOutlineShoppingBag  className=" m-2" style={{width: "25px"}} />
              Add to Cart</Button>

          <div className="w-100 d-flex my-2">
            <Button
            className=" w-50 my-2 btn-light borderrounded-start "
            style={{height: "50px" , width: "40%" , marginRight: "2%"}}>
              <GoHeart  className="m-2"/>
            Wishlist</Button>
            <Button 
            className=" w-50 my-2 btn-light border rounded-start"
            style={{height: "50px" , width: "40%"}}>
              <RiShareForwardLine className="m-2" />
            Share</Button>
          </div>
        </div>
        {selectedProduct.tags && (
          <div style={{marginBottom: "20px"}}>
            <p className="text-secondary m-2 d-inline">
              <IoPricetagsOutline />
            Tags:</p>
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
          <p className="text-secondary" style={{lineHeight: "25px" , fontSize: "14px"}}>{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  </Modal.Body>

  <ModalFooter className="flex-column align-items-start px-1 w-100 ">
    {relatedProducts.length > 0 && (
    <>
    <h5 className="mb-3">Related Products</h5>
    <div className="d-flex overflow-auto w-100 border-top-0">
      {relatedProducts.map((product) => (
        <div className="shadow-sm p-3 bg-white rounded col-2"
        key={product.id}
        style={{  cursor: "pointer" , margin: "20px" }}
        onClick={() => setSelectedProduct(product)}>
          <img src={product.images} alt={product.title} className="img-fluid rounded" style={{  objectFit: "cover" }}/>
          <div className="plus d-inline rounded-circle text-md-center "
            style={{backgroundColor :"#35AFA0", color: "#fff" , float:"right" 
            , width:"30px" , height: "30px" , fontWeight: "700px"}}>
              +
            </div>
            <p className="mt-4 small text-start text-black mt-1">
              {product.price}
            </p>
            <p className="small text-start text-black mt-1">            
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
