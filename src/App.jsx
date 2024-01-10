import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Navigation, Footer, Pagination, ProductCards } from "./components";
import { Offcanvas } from "./components/ui";

export default function App() {
  const [selectedID, setSelectedID] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query.trim(), 400);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen relative flex flex-col">
      <Navigation
        searchTerm={query}
        onSearchTerm={setQuery}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
      />
      <Offcanvas
        selectedItems={cartItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Pagination
        setCategory={setCategory}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <ProductCards
        cartItems={cartItems}
        setCartItems={setCartItems}
        selectedID={selectedID}
        onSelectedID={setSelectedID}
        searchTerm={debouncedQuery}
        category={category}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Footer />
    </main>
  );
}
