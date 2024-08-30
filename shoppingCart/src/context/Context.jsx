import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// create the context
// provide the state to context
// wrap context to root component
// consume the context using the useContext

// 1
export const shoppingCartContext = createContext(null);

//2
function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result);
    if (result && result?.products) {
      setLoading(false);
      setListOfProducts(result?.products);
    }
  }

  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);

    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      console.log("its coming here");
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }

    console.log(cpyExistingCartItems, "cpyExistingCartItems");
    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart");
  }

  useEffect(() => {
    fetchListOfProduct();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
    } else {
      cpyExistingCartItems[findIndexOfCurrentCartItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentCartItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
          cpyExistingCartItems[findIndexOfCurrentCartItem].price,
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
  }

  console.log(cartItems);
  return (
    <shoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
