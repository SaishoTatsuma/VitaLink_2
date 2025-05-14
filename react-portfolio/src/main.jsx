import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const portfolio = {
  name: "saisho",
};

const portfolioContext = createContext(portfolio);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <portfolioContext.Provider value={portfolio}>
      <App />  
    </portfolioContext.Provider>
  </StrictMode>
);

export default portfolioContext;
