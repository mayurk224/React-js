import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./style.css";

function ProductList({ name, city, listofproduct }) {
  // const flag = false;
  // props is an object
  // const {name,city} = props;
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function toggle() {
    setFlag(!flag);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("once");
  }, []);

  useEffect(() => {
    console.log("Count : " + count);
    if (count === 10) setChangeStyle(true);
  }, [count]);

  return (
    <div>
      <h1 className="title">E com website</h1>
      {/* <ProductItem/> */}
      <button onClick={toggle}>click</button>
      <button onClick={increaseCount} style={{color: changeStyle ? "pink" : "yellow"}}>Count : {count}</button>
      {flag ? (
        <h2>
          Welcome to {name} from {city}
        </h2>
      ) : (
        <p>Hello</p>
      )}
      <ul>
        {
          listofproduct.map((product, index) => (
            // <li key={index}>{product}</li>
            <ProductItem
              key={index}
              product={product}
            />
          ))

          // dummydata.forEach((product, index) => (
          //   <ProductItem key={index} product={product} />
          // ))

          // map method is used for creating a new array with the results of calling a provided function on every element in the calling array.

          // forEach method is used for iterating over each element in an array. It does not return a new array.
        }
      </ul>
    </div>
  );
}

export default ProductList;
