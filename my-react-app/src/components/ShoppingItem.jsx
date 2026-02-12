export default function ShoppingItem({
  item,
  onToggle,
  onUpdateAmount,
}) {
  function handleAmountChange(e) {
    const value = Number(e.target.value);
    onUpdateAmount(item.id, value);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
        />

        {item.name}
      </label>

      <input
        type="number"
        min="1"
        value={item.amount}
        onChange={handleAmountChange}
      />
    </li>
  );
}
