import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./ItemPage.module.css";
import { fetchItems } from "../../utils.js";
import StarRating from "./StarRating/StarRating";

const resource = "https://fakestoreapi.com/products/";

function ItemPage() {
  const { cartItems, setCartItems } = useOutletContext();

  const [item, setItem] = useState(null);
  const { id } = useParams();

  function handleCartChange(id) {
    let itemFound = false;
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          count: item.count + 1,
        };
        itemFound = true;
        return updatedItem;
      }
      return item;
    });

    if (!itemFound) {
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        count: 1,
      };
      newCartItems.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(newCartItems));

    setCartItems(newCartItems);
  }

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
          <button
            type="button"
            className={styles.addToCartButton}
            onClick={() => handleCartChange(item.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <p className={styles.itemDescription}>{item.description}</p>
    </div>
  );
}

ItemPage.propTypes = {
  cartItems: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ItemPage;
