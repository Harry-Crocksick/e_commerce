import { useState, useEffect } from "react";

let cache = new Map(); // Temporary storage for Manually caching (note: not so professional just basics)

// Custom Hook for data fetching and caching
// TMI: cache lost when browser reloads it only survives for one browser session
// and as long as user doesn't refresh the page!
export function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    if (!cache.has(url)) {
      fetch(url, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
        cache: "force-cache",
      })
        .then((res) => res.json())
        .then((result) => {
          setIsLoading(false);
          cache.set(url, result);
          !ignore && setProducts(result);
        });
    } else {
      setIsLoading(false);
      setProducts(cache.get(url));
    }

    return () => {
      ignore = true;
      setIsLoading(true);
    };
  }, [url]);

  return [products, isLoading];
}
