import React from 'react';

import classes  from './header.module.css';



const Header = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>ReactMeals</h2>
        <button className={classes.cartButton}>
          <p>Your Cart</p><span className={classes.cartQuantity}>0</span>
        </button>
      </div>
    </div>
  );  
}

export default Header;