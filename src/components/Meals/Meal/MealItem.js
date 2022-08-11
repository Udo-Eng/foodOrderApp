import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { meal } = props;

  return (
    <li className={classes.item}>
      <div className={classes.description}>
        <h3>{meal.name}</h3>
        <span className={classes.mealDescription}>{meal.description}</span>
        <span className={classes.price}>${meal.price}</span>
      </div>
      <MealItemForm
        meal={meal}
      />
    </li>
  );
};

export default MealItem;
