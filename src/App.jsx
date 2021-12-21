import React from 'react';
import Header from './Components/Header/Header';
import Catagories from "./Components/Categories/Categories";
import Products from './Components/Products/Products';
import Footer from "./Components/Footer/Footer";
import SimpleCart from './Components/Cart/SimpleCart';
import Cart from './Components/Cart/Cart';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Catagories />
            <SimpleCart />
            <Products />
          </Route>
          <Route path="/cart" >
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
