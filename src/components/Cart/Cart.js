import React,{useState,useContext} from "react";
import cartContext from "../../store/cartContext";
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

  // Acessing the context of the store 
  const ctx = useContext(cartContext);

  const [isEmpty,setIsEmpty] = useState(false);

    let CART_ITEMS = ctx.cartItems;

    console.log(CART_ITEMS);

    // if(CART_ITEMS.length !== 0){
    //       setIsEmpty(true);
    // }

    const cartItems = isEmpty ? <p> Add items to cart</p> : CART_ITEMS.map((cartItem) => <CartItem cartItem={cartItem} key ={cartItem.id}/>);


  return (
    <Modal onClick={props.onHideCart}>
        <ul className={classes.cart}>{cartItems}</ul>
        <div className={classes.total}>
          <h2>Total amount</h2>
          <p className={classes.price}>$45</p>
        </div>
        <div className={classes.actions}>
          <button  onClick={props.onHideCart} className={classes["cancel-btn"]}>cancel</button>
          <button className={classes["order-btn"]}>Order</button>
        </div>
    </Modal>
  );
}

export default Cart;