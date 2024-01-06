import Container from "./Container";
import { SkeletonCard, ItemCard, NotFound } from "./ui";
import { useFetch } from "./customHooks";

export default function ProductCards({
  onSelectedItems,
  searchTerm,
  category,
}) {
  const url = `https://fakestoreapi.com/products/${category.toLowerCase()}`;
  const [products, isLoading] = useFetch(url);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {isLoading
        ? (
          <Container>
            {Array.from({ length: 12 }, (_, idx) => idx).map((idx) => (
              <SkeletonCard key={idx} />
            ))}
          </Container>
        )
        : filteredProducts.length !== 0 ? (
          <Container>
            {filteredProducts.map((product) => (
              <ItemCard
                key={product.id}
                {...product}
                onSelectedItems={onSelectedItems}
              />
            ))}
          </Container>
        ) : <NotFound />
      }
    </>
  );
}
