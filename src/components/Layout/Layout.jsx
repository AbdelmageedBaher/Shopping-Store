// templates/component/Layout.js

import './Layout.css';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';



export default function Layout() {
    return(
        <div className='d-flex flex-column justify-content-between '>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    )
};

 