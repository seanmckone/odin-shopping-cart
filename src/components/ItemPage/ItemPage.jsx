import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ItemPage.module.css";
import { fetchItems } from "../../utils.js";
import StarRating from "./StarRating/StarRating";

const resource = "https://fakestoreapi.com/products/";

function ItemPage() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  // Fetch item
  useEffect(() => {
    fetchItems(resource + id).then((response) => {
      setItem(response);
    });
  }, [id]);

  if (!item) {
    return null;
  }

  return (
    <div className={styles.itemPage}>
      <div className={styles.itemMain}>
        <img className={styles.itemImage} src={item.image} />
        <div className={styles.itemInfo}>
          <h1 className={styles.itemTitle}>{item.title}</h1>
          <StarRating rating={item.rating.rate} />
          <h2 className={styles.itemPrice}>${item.price.toFixed(2)}</h2>
          <button type="button" className={styles.addToCartButton}>
            Add to cart
          </button>
        </div>
      </div>
      <p className={styles.itemDescription}>{item.description}</p>
    </div>
  );
}

export default ItemPage;
