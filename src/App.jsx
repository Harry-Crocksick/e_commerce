import { Navigation, Footer, Pagination, ProductCards } from "./components";
import { Offcanvas } from "./components/ui";

export default function App() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navigation />
      <Offcanvas />
      <Pagination />
      <ProductCards />
      <Footer />
    </main>
  );
}
