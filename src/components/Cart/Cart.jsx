import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Cart.module.css";
import CartItemDisplay from "./CartItemDisplay/CartItemDisplay";

function Cart({ cartItems, onChange, toggleCart }) {
  function calculateTotal() {
    let total = 0;

    for (const item of cartItems) {
      total += item.price * item.count;
    }

    return total.toFixed(2);
  }

  function handleCartChange(e, id) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          count: parseInt(e.target.value),
        };
        return updatedItem;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(newCartItems));

    onChange(newCartItems);
  }

  function deleteItem(id) {
    const newCartItems = cartItems.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCartItems));

    onChange(newCartItems);
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <h1 className={styles.cartTitle}>Cart</h1>
        {cartItems.map((cartItem) => {
          return (
            <CartItemDisplay
              key={cartItem.id}
              itemTitle={cartItem.title}
              itemPrice={cartItem.price}
              itemCount={cartItem.count}
              onChange={(e) => handleCartChange(e, cartItem.id)}
              onDelete={() => deleteItem(cartItem.id)}
            ></CartItemDisplay>
          );
        })}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalDisplay}>
          <h2 className={styles.total}>Total: </h2>
          <h2 className={styles.totalPrice}>${calculateTotal()}</h2>
        </div>
        <Link
          to={`/checkout`}
          className={styles.checkoutButton}
          onClick={toggleCart}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default Cart;
