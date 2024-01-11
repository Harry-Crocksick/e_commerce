import ListItem from "./ui/ListItem";
import { useDataCenter } from "./context/DataCenter";

export default function CartItems() {
  const { cartItems } = useDataCenter();

  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {cartItems.map((selectedItem) => (
        <ListItem key={selectedItem.id} {...selectedItem} />
      ))}
    </ul>
  );
}
