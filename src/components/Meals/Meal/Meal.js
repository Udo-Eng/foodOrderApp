import React from "react";
import classes from "./Meal.module.css";

const MealItem = (props) => {
  const { meal } = props;

  return (
    <li className={classes.item}>
      <div className={classes.description}>
        <h3>{meal.name}</h3>
        <span className={classes.mealDescription}>{meal.description}</span>
        <span className={classes.price}>${meal.price}</span>
      </div>
      <div>Add-Item</div>
    </li>
  );
};

export default MealItem;
