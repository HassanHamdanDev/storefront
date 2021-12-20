import React from 'react';
import Header from './Components/Header/Header';
import Catagories from "./Components/Categories/Categories";
import Products from './Components/Products/Products';
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Catagories />
      <Products />
      <Footer />
    </>
  )
}

export default App;
