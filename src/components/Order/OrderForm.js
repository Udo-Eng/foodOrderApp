import useInput from "../hooks/use-input";
import classes from "./orderform.module.css";
import SucessResponse from './SucessResponse'
import Modal from "../UI/Modal";
import Card from "../UI/Card";

const textValidator = (value) => {
  return value.trim() !== "";
};

const emailValidator = (value) => {
  return value.trim().includes("@");
};

const OrderForm = (props) => {
  const {
    enteredValue: fullName,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    inputChangeHandler: fullNameChangeHandler,
    blurHandler: fullNameBlurHandler,
  } = useInput(textValidator);

  const fullNameClasses = fullNameIsValid
    ? classes["form-control"]
    : ( classes["form-control"]
     + " " + classes["invalid"] );

  const {
    enteredValue: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput(emailValidator);

  const emailClasses = emailIsValid 
 ? classes["form-control"]
    : ( classes["form-control"]
     + " " + classes["invalid"] );  

  const {
    enteredValue: address,
    isValid: addressIsValid,
    hasError: addressHasError,
    inputChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
  } = useInput(textValidator);

  const addressClasses = addressIsValid
    ? classes["form-control"]
    : classes["form-control"] + " " + classes["invalid"];

  const {
    enteredValue: telephone,
    isValid: telephoneIsValid,
    hasError: telephoneHasError,
    inputChangeHandler: telephoneChangeHandler,
    blurHandler: telephoneBlurHandler,
  } = useInput(textValidator);

  const telephoneClasses = telephoneIsValid
    ? classes["form-control"]
    : classes["form-control"] + " " + classes["invalid"];


  const onSubmitHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;

    if (fullNameIsValid && emailIsValid && addressIsValid && telphoneIsValid) {
      formIsValid = true;
    }else{
        
        return ;
    }


    // TODO Call the props function to make backend request
  };

  return (
    <Modal>
      <Card>
        <Form onSubmit={onSubmitHandler} className='form'>
          <div className="col-50">
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
            {fullNameHasError && <p>Please enter your name</p>}
          </div>
          <div className="col-50">
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
            {emailHasError && <p>Please enter valid email</p>}
          </div>
          <div className="col-50">
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
            {addressHasError && <p>Please enter your name</p>}
          </div>
          <div className="col-50">
            <label htmlFor="telephone">Tel</label>
            <input
              className={addressClasses}
              type="text"
              name="telephone"
              id="telephone"
              value={telephone}
              onChange={telephoneChangeHandler}
              onBlur={telephoneBlurHandler}
            />
            {telephoneHasError && <p>Please enter your address</p>}
          </div>
          <button type="submit" className="col-100">
            Checkout
          </button>
        </Form>
      </Card>
    </Modal>
  );
};

export default OrderForm;
