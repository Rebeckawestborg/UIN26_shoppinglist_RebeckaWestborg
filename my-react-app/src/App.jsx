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
    },
    {
      id: 1,
      name: "Egg",
      amount: 1,
    },
  ]);

  function addItem(item) {
    setItems([...items, item]);
  }

  return (
    <main className="container">
      <h1>Handleliste</h1>

      <AddForm onAdd={addItem} />

      <ShoppingList shoppingItems={items} />
      
    </main>
  );
}

export default App;

