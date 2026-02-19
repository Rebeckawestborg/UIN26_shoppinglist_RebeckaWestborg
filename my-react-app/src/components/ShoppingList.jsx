import ShoppingItem from "./ShoppingItem";

function ShoppingList({ shoppingItems }) {
  return (
    <ul className="shopping-list">
      {shoppingItems.map((item) => (
        <ShoppingItem key={item.id} item={item}/>
      )
      )}
    </ul>
  );
}

export default ShoppingList;
