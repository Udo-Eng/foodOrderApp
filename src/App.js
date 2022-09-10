import React,{Fragment,useState} from 'react';
import Header from './components/Layouts/Header';
import Meals  from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import OrderForm from './components/Order/OrderForm';


function App() {

  // Adding the cart State to Application
  const [showCart,setShowCart] = useState(false);
  const [showOrderForm,setShowOrderForm] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }


   const hideCartHandler = () => {
    setShowCart(false);
  }


    const showOrderFormHandler = () => {
     setShowOrderForm(true);
    };

    const hideOrderFormHandler = () => {
      setShowOrderForm(false);
    };


  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && (
        <Cart onHideCart={hideCartHandler} onOrder={showOrderFormHandler} />
      )}
      {showOrderForm && (
        <OrderForm
          onCheckout={hideOrderFormHandler}
          onCancelOrder={hideOrderFormHandler}
        />
      )}
    </Fragment>
  );
}

export default App;
