import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart.jsx";
import cart from "./cartData.js";

function App() {
  const [cartShowing, setCartShowing] = useState(false);
  const [cartData, setCartData] = useState(cart.cartItems);

  function toggleCart() {
    setCartShowing((cartShowing) => !cartShowing);
  }

  return (
    <div className={styles.app}>
      <Header cartCount={6} onCartClick={toggleCart} />
      {cartShowing && <Cart cartData={cartData} />}
      <Outlet />
    </div>
  );
}

export default App;
