import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/main';
import TaxCalculator from './page/calpage';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/homepage';
import Taxdescription from './page/taxdescription';
import Personcaltax from './page/personcaltex';
import Contact_us from './page/contact';
import Questionanswer from './page/question';
import Abouttax from './page/abouttax';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: '/taxcal',
    element: <TaxCalculator />, // หน้านี้จะเรนเดอร์ TaxCal
  },
  {
    path: '/taxdes',
    element: <Taxdescription />, // หน้านี้จะเรนเดอร์ TaxCal
  },
  {
    path: '/persontax',
    element: <Personcaltax />, // หน้านี้จะเรนเดอร์ TaxCal
  },
  {
    path: '/contact',
    element: <Contact_us />, // หน้านี้จะเรนเดอร์ TaxCal
  },
  {
    path: '/QA',
    element: <Questionanswer />, // หน้านี้จะเรนเดอร์ TaxCal
  },
  {
    path: '/abouttax',
    element: <Abouttax />, // หน้านี้จะเรนเดอร์ TaxCal
  },
 
 

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
