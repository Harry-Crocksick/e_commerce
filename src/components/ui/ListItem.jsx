import { useState } from "react";
import Swal from "sweetalert2";

export default function ListItem({
  id,
  image,
  title,
  price,
  category,
  cartItems,
  setCartItems,
}) {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    count > 1 && setCount(count - 1);
  }

  function handleRemoveItem(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems(cartItems.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={image}
          alt={title}
          title={title}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#" className="line-clamp-1">
                {title}
              </a>
            </h3>
            <p className="ml-4">${price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              onClick={decrement}
            >
              <svg
                className="w-2.5 h-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h16"
                />
              </svg>
            </button>
            <p className="text-gray-700 px-1">Qty {count}</p>
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              onClick={increment}
            >
              <svg
                className="w-2.5 h-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => handleRemoveItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
