import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {

    const {cartItem} = props;


  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item-description"]}>
        <h2>{cartItem.name}</h2>
        <p className={classes.price}>
          ${cartItem.price}
          <span className={classes["cart-item-quantity"]}>
            x {cartItem.quantity}
          </span>
        </p>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
