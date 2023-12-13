import empty_cart from "../../assets/empty_cart.svg";

export default function Offcanvas() {
  return (
    <>
      <div
        id="hs-overlay-right"
        className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-s-2 border-black hidden"
        tabIndex={-1}
      >
        <div className="flex flex-col h-screen">
          <div className="flex justify-between items-center py-2 px-4 border-b-2 border-black dark:border-gray-700">
            <div>
              <h1 className="text-xl font-bold text-black">MMS SOLUTIONS</h1>
              <p className="text-lg font-semibold text-slate-400">E-Commerce</p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-overlay-right"
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
          <div className="flex justify-center items-center flex-1 p-4 h-full overflow-y-scroll">
            <div className="shrink-0">
              <img
                src={empty_cart}
                alt="Empty Cart"
                className="w-64 h-auto object-contain object-center"
              />
            </div>
          </div>
          <footer className="border-t-2 border-black p-1.5">
            <div className="text-right mb-4">
              <p>Total Amount</p>
              <p className="text-black text-xl font-semibold">$1000</p>
            </div>
            <button className="bg-neutral-700 text-white font-medium w-full">
              Order Now
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
