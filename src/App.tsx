import React from 'react';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Home/>

    </div>
  );
}

export default App;
