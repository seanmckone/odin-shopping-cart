import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const [cartShowing, setCartShowing] = useState(false);

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

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
      {cartShowing && (
        <Cart
          cartItems={cartItems}
          onChange={setCartItems}
          toggleCart={toggleCart}
        />
      )}
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
}

export default App;
