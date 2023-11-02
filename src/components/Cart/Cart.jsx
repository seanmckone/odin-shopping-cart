import PropTypes from "prop-types";

import styles from "./Cart.module.css";
import CartItemDisplay from "./CartItemDisplay/CartItemDisplay";

function Cart({ cartItems, onChange }) {
  function calculateTotal() {
    let total = 0;

    for (const item of cartItems) {
      total += item.price * item.count;
    }

    return total;
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.cartTitle}>Cart</h1>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => {
          return (
            <CartItemDisplay
              key={cartItem.id}
              itemTitle={cartItem.title}
              itemPrice={cartItem.price}
              itemCount={cartItem.count}
              onChange={onChange}
            ></CartItemDisplay>
          );
        })}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalDisplay}>
          <h2 className={styles.total}>Total: </h2>
          <h2 className={styles.totalPrice}>{calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Cart;
