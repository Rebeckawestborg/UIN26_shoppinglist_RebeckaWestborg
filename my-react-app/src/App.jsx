import { useState } from "react";
import "./App.css";

import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Melk",
      amount: 2,
      bought: false,
    },
    {
      id: 1,
      name: "Egg",
      amount: 1,
      bought: true,
    },
  ]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function toggleBought(id) {
    setShoppingList(
      shoppingList.map((item) =>
        item.id === id
          ? { ...item, bought: !item.bought }
          : item
      )
    );
  }

  function updateAmount(id, newAmount) {
    if (newAmount < 1) return;

    setShoppingList(
      shoppingList.map((item) =>
        item.id === id
          ? { ...item, amount: newAmount }
          : item
      )
    );
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm onAdd={addItem} />

      <ShoppingList
        shoppingItems={shoppingList}
        onToggle={toggleBought}
        onUpdateAmount={updateAmount}
      />
    </main>
  );
}

export default App;

