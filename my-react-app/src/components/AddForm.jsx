import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

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
      bought: false,
    };

    onAdd(newItem); // ✅ RIKTIG STED

    setName("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Legg til</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}


