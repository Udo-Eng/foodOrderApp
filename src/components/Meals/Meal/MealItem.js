import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext";

const MealItem = (props) => {
 
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

 const  addCartItemHandler = (amount) => {
   
          let item = {
            amount: amount,
            price: +props.price,
            name: props.name,
            id: props.id
          }

          cartCtx.addItem(item);

  }

  return (
    <li className={classes.item}>
      <div className={classes.description}>
        <h3>{props.name}</h3>
        <span className={classes.mealDescription}>{props.description}</span>
        <span className={classes.price}>${price}</span>
      </div>
      <MealItemForm id={props.id} onAddCart={addCartItemHandler} />
    </li>
  );
};

export default MealItem;
