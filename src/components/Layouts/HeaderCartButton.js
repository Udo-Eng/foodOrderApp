import React from 'react';

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"


const HeaderCartButton = (props) => {
 return (
   <button className={classes.cartButton + " " + classes.bump}>
     <span className={classes.icon}>
       <CartIcon />
     </span>
     <p>Your Cart</p>
     <span className={classes.badge}>0</span>
   </button>
 );
}

export default HeaderCartButton;