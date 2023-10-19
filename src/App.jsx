import { useEffect, useState } from "react";

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
}

export default App;
