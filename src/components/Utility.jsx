import { useEffect } from "react";

export function useFetch(url) {
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    }
    console.log(fetchData());
  }, [url]);
}
