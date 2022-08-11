import React from 'react';

import classes  from './Header.module.css';
import HeaderCartButton  from './HeaderCartButton';
import mealImage from '../../assets/mealImage.jpg'



const Header = (props) => {

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h2>ReactMeals</h2>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </div>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );  
}

export default Header;