import React, { useEffect, useState, useContext, useRef } from 'react';
import { apiContext } from '../context/apiContext';
import { order } from '../components/purchaseOrder/Purchase-order';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loading from '../components/Loading/Loading';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

function useShop() {
  const {
    allData: originalData, // ← البيانات الأصلية من context
    apiCategories,
    isLoading,
    setIsLoading
  } = useContext(apiContext);

  const { addToCart } = useContext(CartContext);
  const { handleClick } = order();

  const [allData, setAllData] = useState([]); // ← البيانات المعروضة حاليًا
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [carantPage, setcarantPge] = useState(1);

  // pagination
  const productPrePage = 20;
  const pages = Math.ceil(allData?.length / productPrePage);
  const startIndex = (carantPage - 1) * productPrePage;
  const finishIndex = carantPage * productPrePage;
  const orderProducts = allData?.slice(startIndex, finishIndex);
  const generatedPages = [];
  const pageRefs = useRef([]);

  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  const updateActiveClass = (index) => {
    pageRefs.current.forEach((ref) => {
      if (ref) ref.classList.remove("open");
    });
    if (pageRefs.current[index]) {
      pageRefs.current[index].classList.toggle("open");
    }
  };

  const handlePageClick = (pageNumber, index) => {
    setcarantPge(pageNumber);
    updateActiveClass(index);
  };

  const handlePrev = () => {
    if (carantPage > 1) {
      const newPage = carantPage - 1;
      setcarantPge(newPage);
      updateActiveClass(newPage - 1);
    }
  };

  const handleNext = () => {
    if (carantPage < pages) {
      const newPage = carantPage + 1;
      setcarantPge(newPage);
      updateActiveClass(newPage - 1);
    }
  };

  useEffect(() => {
    if (pageRefs.current[0]) {
      updateActiveClass(0);
    }
  }, [pages]);

  // تحميل البيانات الأصلية أول مرة
  useEffect(() => {
    if (originalData?.length && selectedCategories.length === 0) {
      setAllData(originalData);
    }
  }, [originalData, selectedCategories]);

  const handleQuantityChange = (productId, type) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const newQty = type === 'plus' ? current + 1 : Math.max(current - 1, 0);
      return { ...prev, [productId]: newQty };
    });
  };

  // جلب بيانات متعددة للكاتيجوريز
  const getMultipleCategoryProducts = async (selectedUrls) => {
    try {
      setIsLoading(true);
      const allResponses = await Promise.all(
        selectedUrls.map((catUrl) => axios.get(catUrl))
      );

      const combinedProducts = allResponses.flatMap((res) => res.data.products);
      const sorted = [...combinedProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      setAllData(sorted);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching category data:', error);
      setIsLoading(false);
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      let updated;
      if (prev.includes(category)) {
        updated = prev.filter((cat) => cat !== category);
      } else {
        updated = [...prev, category];
      }

      // لو مفيش كاتيجوري مختارة، نعرض الداتا الأصلية
      if (updated.length === 0) {
        setAllData(originalData);
        return updated;
      }

      const selectedUrls = apiCategories
        .filter((el) => updated.includes(el.name))
        .map((el) => el.url);

      getMultipleCategoryProducts(selectedUrls);
      return updated;
    });
  };

  const showAllData = orderProducts?.map((val, index) => {
    const currentQty = quantities[val.id] || 1;
    return (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
          <div className='buying flex'>
            <div
              onClick={() => {
                if (currentQty > 0) {
                  addToCart({ ...val, quantity: currentQty });
                } else {
                  alert("الرجاء تحديد كمية أكبر من صفر");
                }
              }}
              className='px-2 gap-3 py-1'
            >
              <FaShopify />
            </div>
            <div className='px-2 gap-3 py-1'>
              <FaHeart className='z-3' />
            </div>
          </div>
          <span className='z-3 flex px-2 py-1'>%{val?.discountPercentage}</span>
          <div onClick={() => handleClick(val)} style={{ cursor: 'pointer' }}>
            <img className='card-img' src={val?.thumbnail} alt="" />
          </div>
          <div className='card-body'>
            <p className='m-0'>{val?.title?.split(' ').slice(0, 3).join(' ')}</p>
            <span>In stock {val?.stock}</span>
            <small className='flex gap-1'>
              <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
              <b>{Math.trunc(val?.rating)} review</b>
            </small>
            <b>${val?.price}</b>
            <div className='flex btn-group mt-2'>
              <button onClick={() => handleQuantityChange(val.id, 'min')} className='btn flex'>-</button>
              <p className='m-0 w-100 flex'>{currentQty}</p>
              <button onClick={() => handleQuantityChange(val.id, 'plus')} className='btn flex'>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return {
    apiCategories,
    carantPage,
    setcarantPge,
    productPrePage,
    pages,
    startIndex,
    finishIndex,
    orderProducts,
    generatedPages,
    pageRefs,
    updateActiveClass,
    handlePageClick,
    handlePrev,
    handleNext,
    showAllData,
    isLoading,
    handleQuantityChange,
    selectedCategories,
    toggleCategory
  };
}

export default useShop;