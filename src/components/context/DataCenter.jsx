import { useState, useContext, createContext, useMemo } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const DataContext = createContext(null);

export function useDataCenter() {
  return useContext(DataContext);
}

export default function DataCenter({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query.trim(), 400);
  const [activeTag, setActiveTag] = useState("All");
  const [category, setCategory] = useState("");

  const optimizedData = useMemo(() => {
    return {
      cartItems,
      setCartItems,
      isCartOpen,
      setIsCartOpen,
      selectedID,
      setSelectedID,
      selectedItems,
      setSelectedItems,
      query,
      setQuery,
      debouncedQuery,
      category,
      setCategory,
      activeTag,
      setActiveTag,
    };
  }, [
    cartItems,
    isCartOpen,
    selectedID,
    selectedItems,
    query,
    debouncedQuery,
    category,
    activeTag,
  ]);

  return (
    <DataContext.Provider value={optimizedData}>
      {children}
    </DataContext.Provider>
  );
}
