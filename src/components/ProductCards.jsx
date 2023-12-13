import { SkeletonCard, ItemCard } from "./ui";
import { useFetch } from "./customHooks";
import no_data from "../assets/no_data.svg";

export default function ProductCards({ searchTerm, category }) {
  const url = `https://fakestoreapi.com/products/${category.toLowerCase()}`;
  const [products, isLoading] = useFetch(url);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <section className="flex-1 grid place-content-center">
        <div>
          <p className="text-gray-500 font-semibold text-2xl mb-8">
            Data Not Found!
          </p>
          <img
            src={no_data}
            alt="Data Not Found"
            className="w-48 h-48 object-center"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="responsive-container flex-1 grid gap-x-5 gap-y-28 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-56 mb-20">
      {isLoading
        ? Array.from({ length: 12 }, (_, idx) => idx).map((idx) => (
            <SkeletonCard key={idx} />
          ))
        : filteredProducts.map((product) => (
            <ItemCard key={product.id} {...product} />
          ))}
    </section>
  );
}
