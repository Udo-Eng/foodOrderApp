import {createContext} from 'react';

// Declare the Application wide Context 

 const CartContext = createContext( {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  placeOrder: () => {},
});


export default CartContext;

