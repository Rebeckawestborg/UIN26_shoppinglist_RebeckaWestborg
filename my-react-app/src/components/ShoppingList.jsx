import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  shoppingItems,
  onToggle,
  onUpdateAmount,
}) {
  return (
    <section>
      <h2>Handleliste</h2>

      <ul>
        {shoppingItems.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onUpdateAmount={onUpdateAmount}
          />
        ))}
      </ul>
    </section>
  );
}
