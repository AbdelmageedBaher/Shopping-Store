// templates/component/Home.js

import React from 'react';
import  './Home.css';
import Products from '../Products/Products';
import SliderProducts from './SliderProducts';
import WeekEndDiscount from './WeekEndDiscount';
import {Helmet} from "react-helmet";


export default function Home() {
    return(

        <div className='Home'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <SliderProducts />
          <Products />
          <WeekEndDiscount />
        </div>
    )
};

 