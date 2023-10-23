async function fetchItems(resource) {
  const response = await fetch(resource);
  const items = await response.json();
  return items;
}

export { fetchItems };
