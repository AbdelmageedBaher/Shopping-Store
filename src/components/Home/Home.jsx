// templates/component/Home.js
import React from 'react';
import  './Home.css';
import Products from '../Products/Products';
<<<<<<< HEAD
import SliderProducts from './SliderProducts';
import WeekEndDiscount from './WeekEndDiscount';

export default function Home() {
    return(

        <div className='Home'>
          <SliderProducts />
          <Products />
          <WeekEndDiscount />
=======
import Header from '../Home/Header/Header'
import MainSection from './MainSection';
import Slider1 from '../Home/Slider1/Slider1';
import Slider2 from './Slider2/Slider2';
export default function Home() {
    return(
        <div className='Home'>
          <Header />
          <MainSection />
          <Slider1 />
          <Products />
          <Slider2 />
        </div>
    )
}

 