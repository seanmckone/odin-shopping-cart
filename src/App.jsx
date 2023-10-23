import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState(null);

  // Fetch store items
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      const items = response.json();
      return items;
    }

    fetchItems().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header cartCount={6} />
      <Outlet />
    </div>
  );
}

export default App;
