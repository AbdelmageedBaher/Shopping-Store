import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
import Notfound from './components/Notfound/Notfound';
import PurchaseOrder from "./components/purchaseoOrder/Purchase-order";
import Categories from './components/Categories/Categories';




function App() {
 
  let routes = createBrowserRouter([{
    path:'/',element:<Layout />,children:[
      {index:true,element:<Home />},
      {path:'/about',element:<About />},
      {path:'/shop',element:<Shop />},
      {path:'/categories',element:<Categories />},
      {path:'/blog',element:<Blog />},
      {path:'/contact',element:<Contact />},
      {path:'/checkout',element:<Checkout />},
      {path:'*',element:<Notfound />},
    ]
  }])

 return (
    <PurchaseOrder>
      <RouterProvider router={routes} />
    </PurchaseOrder>
  );
}
export default App
