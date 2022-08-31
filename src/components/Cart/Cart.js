import React,{useState,useContext} from "react";
import CartContext from "../../store/cartContext";
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

  // // Acessing the context of the store 
  const cartCtx = useContext(CartContext);

  const [isNotEmpty,setIsNotEmpty] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`


    // The  and Operator prevents the value from changing 
    if (cartCtx.items.length > 0 && !isNotEmpty) {
      setIsNotEmpty(true);
    }

    const cartRemoveItemHandler = (id) => {
      cartCtx.removeItem(id);
    };

    const cartAddItemHandler = (item) => {
     cartCtx.addItem({...item,amount : 1}); 
    };


    const cartItems = isNotEmpty ? (
      cartCtx.items.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          onRemove={cartRemoveItemHandler.bind(null,cartItem.id)}
          onAdd={cartAddItemHandler.bind(null,cartItem)}
        />
      ))
    ) : (
      <p className={classes.message}> Add items to cart</p>
    ); ;


    const placeOrderHandler = () =>{
      props.onHideCart();
      props.onOrder();
    }

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes.cart}>{cartItems}</ul>
      <div className={classes.total}>
        <h2>Total amount</h2>
        <p className={classes.price}>{totalAmount}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["cancel-btn"]}>
          cancel
        </button>
        {isNotEmpty && (
          <button className={classes["order-btn"]} onClick={placeOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;