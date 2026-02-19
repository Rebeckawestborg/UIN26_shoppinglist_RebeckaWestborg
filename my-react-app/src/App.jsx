import { useState } from "react";
import "./App.css";

import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

/* https://chatgpt.com/share/6996dd4d-e754-8001-8426-9315a2cc5338 */
/* Brukte ChatGPT til default-varene */
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

