import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  //hvis name eller amount er tom vil det komme en feilmelding
    if (!name || !amount) {
      setError("Du må fylle inn både navn og antall.");
      return;
    }

    if (Number(amount) < 1) {
      setError("Antall må være minst 1.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
    
    };

    onAdd(newItem);

    setName("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">

      <input
        type="text"
        placeholder="Vare"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Antall"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Legg til vare</button>

      {error && <p className="error">{error}</p>}

    </form>
  )
}


