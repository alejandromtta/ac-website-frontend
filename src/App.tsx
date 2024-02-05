import React from 'react';
import { createContext } from 'react';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ValidateCertified from './components/validate-certified/ValidateCertified';
import Accreditation from './components/accreditation/Accreditation';
import Products from './components/products/Products';
import { AboutUs } from './components/about-us';

function App() {
  createContext('/')
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/> <Home /></> ,
    },
    {
      path: "/validate-certified",
      element:<><NavBar/>  <ValidateCertified /></>,
    },
    {
      path: "/accreditation",
      element: <><NavBar/> <Accreditation/></>,
    },
    {
      path: "/products/:id",
      element: <><NavBar/> <Products /></>,
    },
    {
      path: "/aboutus",
      element: <><NavBar/> <AboutUs /></>,
    },
  ], { basename: "/",});
  return (
    
    <div className="h-screen App">
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
