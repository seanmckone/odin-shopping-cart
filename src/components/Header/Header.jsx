import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CartButton from "./CartButton/CartButton.jsx";
import styles from "./Header.module.css";

function Header({ onCartClick, cartCount }) {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.headerTitle}>
        Storem Ipsum
      </Link>
      <CartButton onClick={onCartClick} cartCount={cartCount} />
    </div>
  );
}

Header.propTypes = {
  onCartClick: PropTypes.func.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default Header;
