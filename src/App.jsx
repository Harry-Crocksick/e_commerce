import { useState } from "react";
import { Navigation, Footer, Pagination, ProductCards } from "./components";
import { Offcanvas } from "./components/ui";

export default function App() {
  const [activeTag, setActiveTag] = useState("All");
  const [category, setCategory] = useState("");

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Offcanvas />
      <Pagination
        setCategory={setCategory}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <ProductCards category={category} />
      <Footer />
    </main>
  );
}
