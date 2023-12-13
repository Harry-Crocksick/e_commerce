import { useState, useEffect } from "react";

let cache = new Map(); // Manually caching (note: not so professional just basics)

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
