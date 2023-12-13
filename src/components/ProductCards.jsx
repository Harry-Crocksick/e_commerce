import { useState, useEffect } from "react";

export default function ProductCards({ activeTag }) {
  const url = "https://fakestoreapi.com/products";
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

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === activeTag.toLowerCase()
  );

  const displayProducts =
    activeTag.toLowerCase() === "all" ? products : filteredProducts;

  return (
    <section className="responsive-container grid gap-x-5 gap-y-28 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 my-20">
      {isLoading
        ? Array.from({ length: 12 }, (_, idx) => idx).map((idx) => (
            <SkeletonCard key={idx} />
          ))
        : displayProducts.map((product) => (
            <ItemCard key={product.id} {...product} />
          ))}
    </section>
  );
}

function SkeletonCard() {
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1500ms_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

  return (
    <div
      className={`${shimmer} col-span-2 flex flex-col space-y-3 h-auto border-2 border-gray-100 px-2 relative`}
    >
      <div
        className={`${shimmer} relative shrink-0 -mt-16 mb-4 bg-gray-100 w-32 h-32`}
      ></div>
      <h1 className="rounded-full h-6 bg-gray-100"></h1>
      <p className="bg-gray-100 h-36"></p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, idx) => idx).map((item) => (
            <svg
              key={item}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
        </div>
        <div className="bg-gray-100 w-20 h-4"></div>
      </div>
      <div className="flex flex-col space-y-2 border-t border-gray-50 py-2">
        <p className="bg-gray-100 h-5"></p>
        <button className="w-full py-1.5 text-white bg-gray-200 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function ItemCard({ id, image, description, title, rating, price }) {
  return (
    <div
      key={id}
      className="group col-span-2 flex flex-col space-y-3 h-auto border-2 border-slate-400 px-2"
    >
      <div className="shrink-0 -mt-16 mb-8 group-hover:rotate-3 group-hover: transition-transform duration-300 ease-out">
        <img
          src={image}
          alt={description}
          className="w-auto h-32 object-contain object-center"
        />
      </div>
      <h1 className="text-black font-semibold text-xl line-clamp-1">{title}</h1>
      <p className="text-slate-600 font-medium line-clamp-4 flex-1">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, idx) => idx).map((item) => (
            <svg
              key={item}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
        </div>
        <div>
          {rating["rate"]} / {rating["count"]}
        </div>
      </div>
      <div className="flex flex-col space-y-2 border-t border-black py-2">
        <p className="text-black text-lg font-semibold">${price}</p>
        <button className="w-full py-1.5 text-white bg-neutral-700 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
