import React, {useState,createContext}from 'react';


// Sample cart data 
 let SAMPLE_CART_ITEMS = [
      {
        id: "m1",
        name: "Sushi",
        quantity: 1,
        price: 22.99,
      },
      {
        id: "m2",
        name: "Schnitzel",
        quantity: 2,
        price: 16.5,
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        quantity: 3,
        price: 12.99,
      },
    ];


    export const cartContext = createContext({
      cartItems:[],
      updateCart: () => {}
    });

  const CartContextProvider = (props) => {
    
  const [cartItems, setCartItems] =  useState(SAMPLE_CART_ITEMS);

  const addMealToCartHandler = (meal) => {
      setCartItems((prevState => {
        return [...prevState,meal]
      }))
  }


        return <cartContext.Provider value={{cartItems: cartItems,addMealToCartHandler: addMealToCartHandler}}>{props.children}</cartContext.Provider>
    }

    export default CartContextProvider;
   



