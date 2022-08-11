import React,{useState,useContext} from "react";
import cartContext from "../../../store/cartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  
  const [quantity ,setQuantity] = useState(1);
  const ctx = useContext(cartContext);

  const { meal } = props;


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let cartMeal = {
        id: meal.id,
        name: meal.name,
        quantity: quantity,
        price: meal.price,
    }

    ctx.addMealToCartHandler(cartMeal);

  };

  const onChangeHandler = (e) => {
      setQuantity(e.target.value);
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        
        input={{
          type: "number",
          step: 1,
          name: meal.name,
          min: 1,
          max: 5,
          id: "amount_" + meal.id,
          defaultValue: "1",
          onChange: onChangeHandler
        }}
      />
      <button type="submit" className={classes.button}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
