import React,{Fragment,useState} from 'react';
import Header from './components/Layouts/Header';
import Meals  from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

 


function App() {

  // Adding the cart State to Application
  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }


   const hideCartHandler = () => {
    setShowCart(false);
  }


  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </Fragment>
  );
}

export default App;
