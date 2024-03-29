import { useDataCenter } from "./context/DataCenter";

export default function Navigation() {
  const { query, setQuery, cartItems, setIsCartOpen } = useDataCenter();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-black py-2 z-30">
      <nav className="responsive-container flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-black">MMS SOLUTIONS</h1>
          <p className="text-lg font-semibold text-slate-400">E-Commerce</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden lg:inline-flex items-center p-2 border border-black/70 rounded-lg">
            <input
              type="search"
              name="search"
              value={query}
              className="hidden lg:inline-block text-lg outline-none border-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <button
            type="button"
            className="z-50 relative inline-flex justify-center items-center h-[2.875rem] w-[2.875rem] text-sm font-semibold rounded-lg border border-gray-200 bg-black text-gray-800"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">
              {cartItems.length}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
