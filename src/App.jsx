import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import { fetchItems } from "./utils.js";

const resource = "https://fakestoreapi.com/products";

function App() {
  const [items, setItems] = useState(null);

  // Fetch store items
  useEffect(() => {
    fetchItems(resource).then((response) => {
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
