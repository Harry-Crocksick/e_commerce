import Container from "./Container";
import { SkeletonCard, ItemCard, NotFound } from "./ui";
import { useFetch } from "./customHooks";

export default function ProductCards({
  cartItems,
  setCartItems,
  onSelectedID,
  selectedID,
  searchTerm,
  category,
  selectedItems,
  setSelectedItems,
}) {
  const url = `https://fakestoreapi.com/products/${category.toLowerCase()}`;
  const [products, isLoading] = useFetch(url);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <ItemCard
              key={product.id}
              {...product}
              cartItems={cartItems}
              setCartItems={setCartItems}
              selectedID={selectedID}
              onSelectedID={onSelectedID}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
}
