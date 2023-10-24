import styles from "./Cart.module.css";
import closeIcon from "../../assets/icons/close.png";

function Cart({ cartObject }) {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1 className={styles.cartTitle}>Cart</h1>
        <button type="button" className={styles.closeCartButton}>
          <img src={closeIcon} className={styles.closeIcon} />
        </button>
      </div>

      <div className={styles.cartFooter}></div>
    </div>
  );
}

export default Cart;
