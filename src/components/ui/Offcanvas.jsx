import Swal from "sweetalert2";
import CartItems from "../CartItems";
import empty_cart from "../../assets/empty_cart.svg";
import delivery_gif from "/truck.gif";
import { useDataCenter } from "../context/DataCenter";

export default function Offcanvas() {
  const { cartItems, isCartOpen, setIsCartOpen, setCartItems } =
    useDataCenter();

  function handleOrder() {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Cart is Empty😢!",
        text: "Please order something",
        icon: "info",
      });
    } else {
      setCartItems([]);
      Swal.fire({
        title: "🎉Hooray🎉",
        text: "Your order is on the way🥳",
        imageUrl: delivery_gif,
        imageWidth: 350,
        imageHeight: 350,
        imageAlt: "Delivery",
      });
    }
    setIsCartOpen(false);
  }

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 w-full h-screen bg-black/10 backdrop-blur-sm z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      <div
        className={`${isCartOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 end-0 transition-all duration-300 transform h-full max-w-sm w-full z-[60] bg-white`}
        tabIndex={-1}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center py-2 px-4 border-b-2 border-gray-200">
            <div>
              <h1 className="text-xl font-bold text-black">MMS SOLUTIONS</h1>
              <p className="text-lg font-semibold text-slate-400">E-Commerce</p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => setIsCartOpen(false)}
            >
              <span className="sr-only">Close modal</span>
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className="flex justify-center flex-1 p-4 h-full overflow-y-scroll overscroll-contain">
              <CartItems />
            </div>
          ) : (
            <div className="flex justify-center items-center flex-1 p-4 h-full overflow-y-scroll">
              <div className="shrink-0">
                <img
                  src={empty_cart}
                  alt="Empty Cart"
                  className="w-64 h-auto object-contain object-center"
                />
              </div>
            </div>
          )}
          <footer className="border-t-2 border-gray-200 px-4 py-2 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p className="text-lg font-semibold">Subtotal</p>
              <p className="text-xl font-bold">
                $
                {cartItems
                  .reduce(
                    (prev, currentItem) =>
                      prev + currentItem.price * currentItem.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping fees and taxes included.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-black py-3 text-base font-medium text-white shadow-sm hover:bg-black/80"
                onClick={handleOrder}
              >
                Order Now
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
