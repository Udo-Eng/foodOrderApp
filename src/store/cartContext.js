import React, {useState,createContext}from 'react';


// Sample cart data 
 let SAMPLE_CART_ITEMS = [];


 const cartContext = createContext({
      cartItems:[],
      onAddCartItem: (meal) => {}
    });

 export  const CartContextProvider = (props) => {
    
  const [cartItems, setCartItems] =  useState(SAMPLE_CART_ITEMS);

  const addMealToCartHandler = (meal) => {
    console.log(cartItems);

      setCartItems((prevState => {
        return [...prevState,meal]
      }))

  }

        return (<cartContext.Provider value={{cartItems: cartItems, onAddCartItem: addMealToCartHandler}}>{props.children}</cartContext.Provider> )
    }



    export default cartContext;

