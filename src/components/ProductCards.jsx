import Container from "./Container";
import { SkeletonCard, ItemCard, NotFound } from "./ui";
import { useFetch } from "./customHooks";
import { useDataCenter } from "./context/DataCenter";

export default function ProductCards() {
  const { debouncedQuery, category } = useDataCenter();
  const url = `https://fakestoreapi.com/products/${category.toLowerCase()}`;
  const [products, isLoading] = useFetch(url);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <Container>
          {Array.from({ length: 12 }, (_, idx) => idx).map((idx) => (
            <SkeletonCard key={idx} />
          ))}
        </Container>
      ) : filteredProducts.length !== 0 ? (
        <Container>
          {filteredProducts.map((product) => (
            <ItemCard key={product.id} {...product} />
          ))}
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
}
