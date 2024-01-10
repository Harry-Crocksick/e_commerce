import ListItem from "./ui/ListItem";

export default function CartItems({ selectedItems, cartItems, setCartItems }) {
  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {selectedItems.map((selectedItem) => (
        <ListItem
          key={selectedItem.id}
          {...selectedItem}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </ul>
  );
}
