import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

    if(action.type === 'ADD'){

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        let existingCartItemIndex = state.items.findIndex( item => item.id === action.item.id );

        const existingCartItem = state.items[existingCartItemIndex];

        let  updatedItems;

        if(existingCartItem){

        const  updatedItem = {
          ...existingCartItem,
           amount: state.items[existingCartItemIndex].amount + action.item.amount,
         }

         updatedItems = [...state.items];

         updatedItems[existingCartItemIndex] = updatedItem;

        }else{
             updatedItems = state.items.concat(action.item);
        }

        // const updatedItems = state.items.concat(action.item);


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

     if (action.type === "REMOVE") {
       const existingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.id
       );
       const existingItem = state.items[existingCartItemIndex];
       const updatedTotalAmount = state.totalAmount - existingItem.price;
       let updatedItems;
       if (existingItem.amount === 1) {
         updatedItems = state.items.filter((item) => item.id !== action.id);
       } else {
         const updatedItem = {
           ...existingItem,
           amount: existingItem.amount - 1,
         };
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex] = updatedItem;
       }

       return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
       };
     }

     if(action.type === 'ORDER'){
       return defaultCartState;
     }

    return defaultCartState;
};

const CartProvider = (props) => {
  
  const [state, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };


  const placeOrderHandler = () =>{
    dispatchCartAction({type : "ORDER"});
  }
  // Add the context concrete Object to be manipulated by state
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    placeOrder: placeOrderHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

