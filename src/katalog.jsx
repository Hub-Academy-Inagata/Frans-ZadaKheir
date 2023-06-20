import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Katalog from './components/Katalog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/Frans-ZadaKheir/'}
    > */}
    <Katalog />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
