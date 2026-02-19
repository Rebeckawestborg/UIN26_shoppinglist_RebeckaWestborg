function ShoppingItem({ item }) {
  return (
    <li className={"shopping-item"}>
      
      {/* Klikk for kjøpt */}
      <span onClick={() => onToggle(item.id)}>
        {item.name}
      </span>

      {/* Endrer antall */}
      <input
        type="number"
        min="1"
        value={item.amount}
        onChange={(e) =>
          onUpdateAmount(item.id, Number(e.target.value))
        }
      />
    </li>
  );
}

export default ShoppingItem;
