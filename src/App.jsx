import { useState } from "react";
import { Navigation, Footer, Pagination, ProductCards } from "./components";
import Offcanvas from "./components/ui/Offcanvas";

export default function App() {
  const [activeTag, setActiveTag] = useState("All");

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Offcanvas />
      <Pagination activeTag={activeTag} setActiveTag={setActiveTag} />
      <ProductCards activeTag={activeTag} />
      <Footer />
    </main>
  );
}
