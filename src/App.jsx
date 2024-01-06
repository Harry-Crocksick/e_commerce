import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Navigation, Footer, Pagination, ProductCards } from "./components";
import { Offcanvas } from "./components/ui";

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query.trim(), 400);

  return (
    <main className="min-h-screen relative flex flex-col">
      <Navigation searchTerm={query} onSearchTerm={setQuery} />
      <Offcanvas />
      <Pagination
        setCategory={setCategory}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <ProductCards
        selectedItems={selectedItems}
        onSelectedItems={setSelectedItems}
        searchTerm={debouncedQuery}
        category={category}
      />
      <Footer />
    </main>
  );
}
