import PropTypes from "prop-types";

import styles from "./CartItemDisplay.module.css";

function CartItemDisplay({
  itemTitle,
  itemPrice,
  itemCount,
  onChange,
  onDelete,
}) {
  return (
    <div className={styles.cartItemDisplay}>
      <div className={styles.itemInfo}>
        <h1 className={styles.itemTitle}>{itemTitle}</h1>
        <h2 className={styles.itemPrice}>
          ${(itemPrice * itemCount).toFixed(2)}
        </h2>
      </div>
      <div className={styles.itemLower}>
        <div className={styles.itemCountContainer}>
          <label htmlFor="itemCount">Count: </label>
          <input
            name="itemCount"
            type="number"
            className={styles.itemCountInput}
            value={itemCount}
            onChange={onChange}
            max={50}
            min={1}
          />
        </div>
        <button className={styles.removeButton} onClick={onDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}
CartItemDisplay.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItemDisplay;
