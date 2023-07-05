const groceriesList = () => {
  const groceries = new Map();
  const items = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(items)) {
    groceries.set(key, items[key]);
  }
  return groceries;
};

export default groceriesList;
