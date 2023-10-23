import PropTypes from "prop-types";

import cartIcon from "../../../assets/icons/shopping-cart.png";
import styles from "./CartButton.module.css";

function CartButton({ onClick, cartCount }) {
  return (
    <button type="button" onClick={onClick} className={styles.cartButton}>
      <img src={cartIcon} className={styles.cartIcon} />
      {cartCount > 0 && <p className={styles.cartCount}>{cartCount}</p>}
    </button>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default CartButton;
