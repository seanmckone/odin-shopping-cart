import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

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
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
