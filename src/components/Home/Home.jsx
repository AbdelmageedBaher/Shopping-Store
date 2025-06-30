// templates/component/Home.js
import React from 'react';
import  './Home.css';
import Products from '../Products/Products';
import SliderProducts from './SliderProducts';
import WeekEndDiscount from './WeekEndDiscount';

export default function Home() {
    return(

        <div className='Home'>
          <SliderProducts />
          <Products />
          <WeekEndDiscount />
        </div>
    )
};

 