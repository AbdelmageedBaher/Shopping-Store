import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { ApiContextProvider } from './context/apiContext.jsx';

createRoot(document.getElementById('root')).render(
    <ApiContextProvider>
        <App />
    </ApiContextProvider>
)
