import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

    let SAMPLE_CART_ITEM = [
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

    const cartItems = SAMPLE_CART_ITEM.map((cartItem) => <CartItem cartItem={cartItem} key ={cartItem.id}/>)

  return (
    <Modal>
      <ul className={classes.cart}>{cartItems}</ul>
      <div className={classes.actions}>
        <button className={classes['cancel-btn']}>cancel</button>
        <button className={classes['order-btn']}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;