import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/FunctionalComponent";
import ProductList from "./components/products/ProductList";
import Users from "./components/users/Users";
import ContextButton from "./context_concept/ContextButton";
import ContextText from "./context_concept/ContextText";
import UseReducter_ex from "./components/UseReducter_ex";

const dummydata = ["Product 1", "Product 2", "Product 3"];
function App() {
  return (
    <>
      <h2>App.jsx</h2>
      {/* <ClassBasedComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList listofproduct={dummydata} name="Mayur" city="Nagpur" /> */}
      {/* <Users/> */}
      {/* <ContextButton />
      <ContextText /> */}
      <UseReducter_ex/>
    </>
  );
}

export default App;
