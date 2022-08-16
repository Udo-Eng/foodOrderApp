import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {

    const {cartItem} = props;

    const price = `$${cartItem.price.toFixed(2)}`;


  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item-description"]}>
        <h2>{cartItem.name}</h2>
        <p className={classes.price}>
          {price}
          <span className={classes["cart-item-quantity"]}>
            x {cartItem.amount}
          </span>
        </p>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
