import { useState, useEffect } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

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
        !ignore && setProducts(result);
      });

    return () => {
      ignore = true;
      setIsLoading(true);
    };
  }, [url]);

  return [products, isLoading];
}
