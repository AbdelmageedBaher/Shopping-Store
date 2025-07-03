import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { apiContext } from '../context/apiContext';
import { useRef } from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
 import { order } from '../components/purchaseOrder/Purchase-order';


function useShop() {
const {allData , apiCategories , getApiSpacificCategory} = useContext(apiContext)
const[carantPage , setcarantPge] = useState(1)

          const { handleClick } = order();





        //start paginion
    const productPrePage = 20
    const pages = Math.ceil(allData?.length / productPrePage)
    const startIndex = (carantPage - 1) * productPrePage
    const finishIndex = carantPage * productPrePage
    const orderProducts = allData?.slice(startIndex , finishIndex)
    const generatedPages = []
    const pageRefs = useRef([]);


        for (let i = 1; i <= pages; i++) {
          generatedPages.push(i)
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
  //end paginion
  

 // start-fetch-allData
const showAllData = orderProducts?.map((val , index)=>{
  return(
    <div key={index}  className="col-lg-3 col-md-6 col-12">
          <div  className="card" onClick={() => handleClick(val)} style={{ cursor: 'pointer' }}>
          <div className='buying flex '>
            <div className='px-2 gap-3 py-1'>
            <FaShopify/>
            </div>
            <div className='px-2 gap-3 py-1'>
            <FaHeart className='z-3'/>
            </div>
          </div>
          <span className='z-3 flex px-2 py-1'>%{val?.discountPercentage}</span>
          <div >
          <img className='card-img'  src={val?.thumbnail} alt="" />
          </div>
          <div className='card-body'>
          <p className='m-0'>{val?.title?.split(' ').slice( 0  , 3).join(' ')}</p>
          <span>In stock {val?.stock}</span>
          <small className='flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/><CiStar/><b>{Math.trunc(val?.rating)} review</b></small>
          <b>${val?.price}</b>
          <div className='flex btn-group mt-2'>
            <button className='btn flex'>-</button>
            <p className='m-0 w-100 flex'>0</p>
            <button className='btn flex'>+</button>
          </div>
          </div>
          </div>
          </div>
          )
        })
        // end-fetch-allData
        
        
        return{allData , apiCategories , getApiSpacificCategory , carantPage , setcarantPge , productPrePage , pages , startIndex , finishIndex , orderProducts , generatedPages , pageRefs ,updateActiveClass , handlePageClick , handlePrev , handleNext , showAllData}
        
      }
      
      export default useShop
