import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart.jsx";
import cart from "./cartData.js";

function App() {
  const [cartShowing, setCartShowing] = useState(false);
  const [cartItems, setCartItems] = useState(cart.cartItems);

  function toggleCart() {
    setCartShowing((cartShowing) => !cartShowing);
  }

  function calculateCartCount() {
    let cartCount = 0;
    for (const item of cartItems) {
      cartCount += item.count;
    }

    return cartCount;
  }

  return (
    <div className={styles.app}>
      <Header cartCount={calculateCartCount()} onCartClick={toggleCart} />
      {cartShowing && <Cart cartItems={cartItems} onChange={setCartItems} />}
      <Outlet />
    </div>
  );
}

export default App;
