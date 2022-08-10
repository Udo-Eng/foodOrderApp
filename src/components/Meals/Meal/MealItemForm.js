import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          step: 1,
          name: "item",
          min: 1,
          max: 5,
          id: "amount_" + props.id,
          defaultValue: "1",
        }}
      />
      <button type="submit" className={classes.button}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
