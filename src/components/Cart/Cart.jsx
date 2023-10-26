import PropTypes from "prop-types";

import styles from "./Cart.module.css";
import CartItemDisplay from "./CartItemDisplay/CartItemDisplay";

function Cart({ cartData, onChange }) {
  return (
    <div className={styles.cart}>
      <h1 className={styles.cartTitle}>Cart</h1>
      <div className={styles.cartItems}>
        {cartData.map((cartItem) => {
          return (
            <CartItemDisplay
              key={cartItem.id}
              itemTitle={cartItem.title}
              itemPrice={cartItem.price}
              itemCount={cartItem.count}
            ></CartItemDisplay>
          );
        })}
      </div>
      <div className={styles.cartFooter}></div>
    </div>
  );
}

Cart.propTypes = {
  cartData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Cart;
