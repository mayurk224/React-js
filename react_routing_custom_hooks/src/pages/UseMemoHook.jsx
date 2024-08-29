import React, { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";

function UseMemoHook() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  const filteredProducts = useMemo(() => {
    return data?.products ? filterPrice(data.products) : [];
  }, [data]);

  function filterPrice(getProducts) {
    console.log("this is render");
    return getProducts?.length > 0
      ? getProducts.filter((single) => single.price > 10)
      : [];
  }

  const memo = useMemo(() => filterPrice(data?.products), [data?.products]);

  if (loading) return <h1>Please Wait</h1>;

  console.log(data);
  return (
    <div>
      <h1 style={{ color: flag ? "red" : "blue" }}>UseMemoHook</h1>
      <button onClick={() => setFlag(!flag)}>Toggle</button>
      <ul>
        {memo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoHook;
