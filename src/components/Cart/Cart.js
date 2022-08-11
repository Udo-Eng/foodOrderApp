import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

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

    const cartItems = SAMPLE_CART_ITEMS.map((cartItem) => <CartItem cartItem={cartItem} key ={cartItem.id}/>)

  return (
    <Modal onClick={props.onHideCart}>
        <ul className={classes.cart}>{cartItems}</ul>
        <div className={classes.total}>
          <h2>Total amount</h2>
          <p className={classes.price}>$45</p>
        </div>
        <div className={classes.actions}>
          <button  onClick={props.onHideCart} className={classes["cancel-btn"]}>cancel</button>
          <button className={classes["order-btn"]}>Order</button>
        </div>
    </Modal>
  );
}

export default Cart;