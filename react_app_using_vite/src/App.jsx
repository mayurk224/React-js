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
import FormComponent from "./components/forms/FormComponent";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/registerForm/RegisterForm";
import LocationSelector from "./components/commonInput/LocationSelector";

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
      {/* <UseReducter_ex/> */}
      {/* <FormComponent/> */}
      <div style={{ display: "flex", gap: "10px" }}>
        <LoginForm />
        <RegisterForm />
        <LocationSelector />
      </div>
    </>
  );
}

export default App;
