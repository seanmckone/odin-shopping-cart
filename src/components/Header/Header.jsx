import PropTypes from "prop-types";

import CartButton from "./CartButton/CartButton.jsx";
import styles from "./Header.module.css";

function Header({ onCartClick, cartCount }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Storem Ipsum</h1>
      <CartButton onClick={onCartClick} cartCount={cartCount} />
    </div>
  );
}

Header.propTypes = {
  onCartClick: PropTypes.func.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default Header;
