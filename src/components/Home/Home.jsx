// templates/component/Home.js

import  './Home.css';
import Products from '../Products/Products';
import SliderProducts from './SliderProducts';
import {Helmet} from "react-helmet";
import Header from '../Home/Header/Header'
import MainSection from './MainSection';
import Slider1 from '../Home/Slider1/Slider1';
import HeaderSlider from './../Categories/HeaderSlider/HeaderSlider';
import WeekEndDiscount from './WeekEndDiscount';

export default function Home() {
    return(
        <div className='Home'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <HeaderSlider />
         <MainSection />
          <SliderProducts />
          <WeekEndDiscount />
          <Products />
         <Slider1 /> 
        </div>
    )
}

 