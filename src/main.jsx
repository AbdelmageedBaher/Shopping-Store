import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { ApiContextProvider } from './context/apiContext.jsx';
<<<<<<< HEAD
import React from 'react';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContextProvaider } from './context/CartContext.jsx';
=======
import { CartContextProvider } from './context/CartContext.jsx';
import App from './App.jsx';
>>>>>>> 7913b2fa98b16f40fd7aa1df933f01a154a1e288

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider> 
        <CartContextProvaider>
          <App />
        </CartContextProvaider>
      </ApiContextProvider>
    </QueryClientProvider>
  
);

// temporary edit to trigger commit

