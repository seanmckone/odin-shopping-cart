import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./ItemCard.module.css";

function ItemCard({ itemId, itemImage, itemTitle, itemPrice }) {
  return (
    <Link to={`/item/${itemId}`} className={styles.itemCard}>
      <img src={itemImage} className={styles.itemImage} />
      <h1 className={styles.itemTitle}>{itemTitle}</h1>
      <h2 className={styles.itemPrice}>{itemPrice}</h2>
    </Link>
  );
}

ItemCard.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
};

export default ItemCard;
