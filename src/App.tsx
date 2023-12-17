import React from 'react';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ValidateCertified from './components/validate-certified/ValidateCertified';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "about",
          element: <></>,
        },
      ],
    },
    {
      path: "/validate-certified",
      element: <ValidateCertified />,
    },
  ], { basename: "/",});
  return (
    
    <div className="App">
            <NavBar/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
