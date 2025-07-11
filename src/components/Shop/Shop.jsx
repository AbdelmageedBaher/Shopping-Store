import React, { useContext, useRef } from 'react';
import './Shop.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import img1 from '../../assets/images/prand-star.png';
import img2 from '../../assets/images/proster-shop.png';
import useShop from '../../hooks/useShop';
import Loading from '../Loading/Loading';
import { CartContext } from '../../context/CartContext';
import { Helmet } from 'react-helmet';

function Shop() {
  const {
    apiCategories,
    carantPage,
    setcarantPge,
    pages,
    generatedPages,
    pageRefs,
    handlePageClick,
    handlePrev,
    handleNext,
    showAllData,
    isLoading,
    selectedCategories,
    toggleCategory
  } = useShop();

  const { totallCart } = useContext(CartContext);
  const checkBoxCat = useRef([]);

  const changeCheckBox = (index, name) => {
    if (checkBoxCat.current[index]) {
      checkBoxCat.current[index].classList.toggle("open");
    }
    toggleCategory(name);
  };

  if (isLoading) return <Loading />;

  return (
    <div className='Shop mx-5 p-3'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Shop</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <p className='m-0'>HOME <span><FaChevronRight className='m-0 p-0' /> PRODUCTS </span></p>
      </div>
      <div className="row mt-5">
        <div className="sidePro col-lg-3 col-12">
          {/* start menu-Product-Categories */}
          <b className='text-uppercase p-0 m-0'>Product Categories</b>
          <ul className='p-0'>
            {apiCategories.map((el, index) => (
              <li key={index}>
                <p
                  ref={(elRef) => (checkBoxCat.current[index] = elRef)}
                  onClick={() => changeCheckBox(index, el.name)}
                  className={`p-0 m-0 ${selectedCategories.includes(el.name) ? 'open' : ''}`}
                >
                  <span><FaCheckSquare className='check' /></span>
                  {el.name}
                </p>
              </li>
            ))}
          </ul>
          {/* end menu-Product-Categories */}

          {/* start menu-Brands */}
          <b className='text-uppercase p-0 mt-5'>brands</b>
          <ul className='p-0'>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>prand-1 <small>(0)</small></p></li>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>prand-2 <small>(0)</small></p></li>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>prand-3 <small>(0)</small></p></li>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>prand-4 <small>(0)</small></p></li>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>prand-5 <small>(0)</small></p></li>
          </ul>
          {/* end menu-Brands */}

          {/* start form-price */}
          <b className='text-uppercase p-0 mt-5'>Price</b>
          <div className='price flex gap-2'>
            <div className='d-flex flex-column'>
              <label htmlFor="from">from</label>
              <input className='p-2 w-100' disabled type="text" value={`${totallCart.toFixed(3)}`} name="from" />
            </div>
            <span>-</span>
            <div className='d-flex flex-column'>
              <label htmlFor="to">to</label>
              <input className='p-2 w-100' disabled type="text" value={`${totallCart.toFixed(0)}`} name="to" />
            </div>
          </div>
          {/* end form-price */}

          {/* start menu-Availability */}
          <b className='text-uppercase p-0 mt-5'>Availability</b>
          <ul className='p-0'>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>In stock <small>(0)</small></p></li>
            <li><p className='p-0 m-0'><span><FaCheckSquare className='check' /></span>Out of stock <small>(0)</small></p></li>
          </ul>
          <img className='mt-5' src={img1} alt="" />
          {/* end menu-Availability */}
        </div>

        <div className="col-lg-9 col-12">
          <div className='poster'>
            <img className='w-100' src={img2} alt="" />
            <div className='d-flex flex-column'>
              <p className='m-0'>Organic Meals Prepared</p>
              <b>Delivered to <span>your Home</span></b>
              <small>Fully prepared & delivered nationwide.</small>
            </div>
          </div>

          <div className='titleShop mt-4 bg-light rounded py-3 px-5 d-flex justify-content-between align-items-center'>
            <span>{showAllData?.length} products</span>
            <p className='p-0 m-0'>Sort by:<b className='ms-1'>Alphabetically, A-Z</b></p>
          </div>

          {/* start-cards */}
          <div className="row g-0 mt-4">{showAllData}</div>
          {/* end-cards */}

          {/* start-pagination */}
          <div className='pagination flex gap-2 mt-5'>
            <button onClick={handlePrev} className="px-2 py-1 border rounded-5" disabled={carantPage === 1}>
              <FaChevronLeft />
            </button>

            {generatedPages.map((pag, index) => (
              <span
                key={pag}
                ref={(el) => (pageRefs.current[index] = el)}
                onClick={() => { setcarantPge(pag); handlePageClick(pag, index); }}
                className='flex'
              >
                {pag}
              </span>
            ))}

            <button onClick={handleNext} className="px-2 py-1 rounded-5 border" disabled={carantPage === pages}>
              <FaChevronRight />
            </button>
          </div>
          {/* end-pagination */}
        </div>
      </div>
    </div>
  );
}

export default Shop;