import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { ApiContextProvider } from './context/apiContext.jsx';
import App from './App.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CartContextProvider } from './context/CartContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider> 
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ApiContextProvider>
    </QueryClientProvider>
  
);

// temporary edit to trigger commit

