// templates/component/Home.js

import  './Home.css';
import Products from '../Products/Products';
import SliderProducts from './SliderProducts';
import {Helmet} from "react-helmet";
import Header from '../Home/Header/Header'
import MainSection from './MainSection';
import Slider1 from '../Home/Slider1/Slider1';
import Slider2 from './Slider2/Slider2';

export default function Home() {
    return(
        <div className='Home'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <SliderProducts />
          <Header />
          <MainSection />
          <Slider1 />
          <Products />
          <Slider2 />
        </div>
    )
}

 