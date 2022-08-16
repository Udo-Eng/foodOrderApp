import React,{useRef,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();


  const onSubmitHandler = (event) => {

    event.preventDefault();

   const enteredAmount = inputAmountRef.current.value;
   const enteredAmountNumber = +enteredAmount;


   if (
     enteredAmount.trim().length === 0 ||
     enteredAmountNumber < 1 ||
     enteredAmountNumber > 5
   ) {
     setAmountIsValid(false)
     return;
   }
   
   props.onAddCart(enteredAmountNumber);


  };

  

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          type: "number",
          step: 1,
          min: 1,
          max: 5,
          id: "amount_" + props.id,
          defaultValue: "1",
        }}
      />
      <button type="submit" className={classes.button}>
        + Add
      </button>
      {!amountIsValid && <p className={classes.message}>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
