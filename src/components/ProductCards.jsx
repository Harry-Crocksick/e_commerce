import { useState, useEffect } from "react";
import { SkeletonCard, ItemCard } from "./ui";

export default function ProductCards({ category }) {
  const url = `https://fakestoreapi.com/products/${category.toLowerCase()}`;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        !ignore && setProducts(result);
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return (
    <section className="responsive-container grid gap-x-5 gap-y-28 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 my-20">
      {isLoading
        ? Array.from({ length: 12 }, (_, idx) => idx).map((idx) => (
            <SkeletonCard key={idx} />
          ))
        : products.map((product) => <ItemCard key={product.id} {...product} />)}
    </section>
  );
}
