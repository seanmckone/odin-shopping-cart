import { useEffect, useState } from "react";
import styles from "./CheckoutPage.module.css";
import { fetchItems } from "../../utils.js";

const resource = "https://dog.ceo/api/breeds/image/random";

function CheckoutPage() {
  const [imgUrl, setImgUrl] = useState(null);

  // Fetch dog image
  useEffect(() => {
    fetchItems(resource).then((response) => {
      setImgUrl(response.message);
    });
  }, []);

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.checkoutTitle}>Thanks for Shopping!</h1>
      <div className={styles.checkoutMessage}>
        <h2>
          Unfortunately this isn&apos;t a real store so you can&apos;t check
          out.
        </h2>
        <h2>Enjoy this dog instead!</h2>
      </div>
      {imgUrl ? <img src={imgUrl} className={styles.dogImage} /> : "Loading"}
    </div>
  );
}

export default CheckoutPage;
