import { useState, useEffect, useRef } from "react";
import Stars from "./Stars";
import Spinner from "./Spinner";
import { Toast } from "../utils/toast";

export default function ItemCard({
  id,
  image,
  description,
  title,
  rating,
  price,
  cartItems,
  setCartItems,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    let hasItem = cartItems.find((item) => item.id === id);
    if (hasItem) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, id]);

  function handleClick(id) {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setCartItems((prev) => [...prev, result]);
        Toast.fire({
          icon: "success",
          title: "Successfully added to cart!",
        });
      });
    setIsAdded(true);
  }

  return (
    <div
      key={id}
      className="group col-span-2 flex flex-col space-y-3 h-auto border-2 border-slate-400 px-2"
    >
      <div className="shrink-0 -mt-16 mb-8 group-hover:rotate-3 group-hover: transition-transform duration-300 ease-out">
        <img
          ref={imgRef}
          src={image}
          alt={description}
          className="w-auto h-32 object-contain object-center"
        />
      </div>
      <h1 className="text-black font-semibold text-xl line-clamp-1">{title}</h1>
      <p className="text-slate-600 font-medium flex-1 line-clamp-4">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Stars rating={rating.rate} />
        </div>
        <div>
          ( {rating.rate} / {rating.count} )
        </div>
      </div>
      <div className="flex flex-col space-y-2 border-t border-black py-2">
        <p className="text-black text-lg font-semibold">${price}</p>
        <button
          disabled={isAdded}
          className={`${
            isAdded && "opacity-50"
          } inline-flex space-x-1 justify-center items-center w-full py-1.5 text-white bg-neutral-700 font-medium`}
          onClick={() => handleClick(id)}
        >
          {isLoading ? <Spinner /> : isAdded ? "Added to Cart" : "Add"}
        </button>
      </div>
    </div>
  );
}
