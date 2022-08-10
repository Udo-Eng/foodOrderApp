import React,{Fragment} from 'react';
import Header from './components/Layouts/Header';
import Meals  from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

 


function App() {
  return (
    <Fragment>
      <Header />
      <Meals/>
      {/* <Cart /> */}
    </Fragment>
  );
}

export default App;
