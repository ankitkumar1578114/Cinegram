import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from './pages/route'
import {BrowserRouter,Route} from "react-router-dom"
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <RouterPage/>    
     </BrowserRouter>
);
