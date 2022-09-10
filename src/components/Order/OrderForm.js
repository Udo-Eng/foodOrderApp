import useInput from "../hooks/use-input";
import classes from "./orderform.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cartContext";

const textValidator = (value) => {
  return value.trim() !== "";
};

const emailValidator = (value) => {
  return value.trim().includes("@");
};

const OrderForm = (props) => {
  const ctx = useContext(CartContext);

  const {
    enteredValue: fullName,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    inputChangeHandler: fullNameChangeHandler,
    blurHandler: fullNameBlurHandler,
  } = useInput(textValidator);

  const fullNameClasses = fullNameHasError
    ? classes["form-control"] + " " + classes["invalid"]
    : classes["form-control"];

  const {
    enteredValue: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput(emailValidator);

  const emailClasses = emailHasError
    ? classes["form-control"] + " " + classes["invalid"]
    : classes["form-control"];

  const {
    enteredValue: address,
    isValid: addressIsValid,
    hasError: addressHasError,
    inputChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
  } = useInput(textValidator);

  const addressClasses = addressHasError
    ? classes["form-control"] + " " + classes["invalid"]
    : classes["form-control"];

  const {
    enteredValue: telephone,
    isValid: telphoneIsValid,
    hasError: telphoneHasError,
    inputChangeHandler: telephoneChangeHandler,
    blurHandler: telephoneBlurHandler,
  } = useInput(textValidator);

  const telphoneClasses = telphoneHasError
    ? classes["form-control"] + " " + classes["invalid"]
    : classes["form-control"];

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && addressIsValid && telphoneIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      // TODO Send the request to firebase database
      props.onCheckout();

      // Clear the form to fuliful the Order
      ctx.placeOrder();
    } else {
      return;
    }
  };

  return (
    <Modal onClick={props.onCancelOrder}>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <h2>Checkout</h2>
        <div className={classes["col-50"]}>
          <label htmlFor="fullName">Full Name</label>
          <input
            className={fullNameClasses}
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
          />
          {fullNameHasError && (
            <p className={classes["error-text"]}>Please enter your name</p>
          )}
        </div>
        <div className={classes["col-50"]}>
          <label htmlFor="email">E-Mail</label>
          <input
            className={emailClasses}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes["error-text"]}>Please enter valid email</p>
          )}
        </div>
        <div className={classes["col-50"]}>
          <label htmlFor="address">Address</label>
          <input
            className={addressClasses}
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          {addressHasError && <p className={classes["error-text"]}>Please enter your name</p>}
        </div>
        <div className={classes["col-50"]}>
          <label htmlFor="telephone">Tel</label>
          <input
            className={telphoneClasses}
            type="text"
            name="telephone"
            id="telephone"
            value={telephone}
            onChange={telephoneChangeHandler}
            onBlur={telephoneBlurHandler}
          />
          {telphoneHasError && (
            <p className={classes["error-text"]}>Please enter your address</p>
          )}
        </div>
        <div className={classes.actions}>
          <button onClick={props.onCancelOrder}>Cancel</button>
          <button type="submit" disabled={!formIsValid}>
            Checkout
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default OrderForm;
