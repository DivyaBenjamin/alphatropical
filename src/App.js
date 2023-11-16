import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Works from "./component/Work/Work";
import Products from "./component/Products/Products";
import Footer from "./component/Footer/Footer";
import { NavLink } from "react-router-dom";
import Home from "./component/Home";
import Work from "./component/Work/Work";
function App() {
  return (
    <div>
     <Navbar/>

      <Home/>
      <Work/>
      <Products/>
     <Footer/>

    </div>
  );
}

export default App;
