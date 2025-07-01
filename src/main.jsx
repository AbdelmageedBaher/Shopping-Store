import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import { ApiContextProvider } from './context/apiContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
<>

    <QueryClientProvider client={queryClient}>
    <ApiContextProvider>
        <App />
    </ApiContextProvider>
    </QueryClientProvider> 
</>
)
