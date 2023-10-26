import PropTypes from "prop-types";

import styles from "./CartItemDisplay.module.css";

function CartItemDisplay({ itemTitle, itemPrice, itemCount, onChange }) {
  return (
    <div className={styles.cartItemDisplay}>
      <div className={styles.itemInfo}>
        <h1 className={styles.itemTitle}>{itemTitle}</h1>
        <h2 className={styles.itemPrice}>
          ${(itemPrice * itemCount).toFixed(2)}
        </h2>
      </div>
      <input
        type="number"
        className={styles.itemCountInput}
        value={itemCount}
        onChange={onChange}
      />
    </div>
  );
}
CartItemDisplay.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CartItemDisplay;
