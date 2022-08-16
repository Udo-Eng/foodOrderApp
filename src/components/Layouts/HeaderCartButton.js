import React,{useContext,useEffect,useState} from 'react';
import CartContext from '../../store/cartContext';
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";


const HeaderCartButton = (props) => {

  const  cartCtx = useContext(CartContext);
  const  [btnIsHighlighted,setBtnIsHighlighted] = useState(false);

  const {items} = cartCtx;

  useEffect(() => {

    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () =>{
      clearTimeout(timer);
    }
  
  }, [items])
  
  

  let numberOfCartItems = items.reduce((currNumber, item)=>{
    return currNumber + item.amount
  },0)


  let btnClasses = `${classes.cartButton} ${btnIsHighlighted ? classes.bump : ''}`;


 return (
   <button className={btnClasses} onClick={props.onClick}>
     <span className={classes.icon}>
       <CartIcon />
     </span>
     <p>Your Cart</p>
     <span className={classes.badge}>{numberOfCartItems}</span>
   </button>
 );
}

export default HeaderCartButton;