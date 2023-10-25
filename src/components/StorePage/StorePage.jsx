import { useEffect, useState } from "react";

import styles from "./StorePage.module.css";
import ItemCard from "./ItemCard/ItemCard";
import { fetchItems } from "../../utils.js";

const resource = "https://fakestoreapi.com/products";

function StorePage() {
  const [items, setItems] = useState(null);

  // Fetch store items
  useEffect(() => {
    fetchItems(resource).then((response) => {
      setItems(response);
    });
  }, []);

  if (!items) {
    return null;
  }

  return (
    <div className={styles.storePage}>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            itemId={item.id}
            itemImage={item.image}
            itemTitle={item.title}
            itemPrice={item.price}
          />
        );
      })}
    </div>
  );
}

export default StorePage;
