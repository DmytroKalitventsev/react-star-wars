import { useEffect, useState } from "react";

export const usePromiseAll = (links) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isValidApi, setIsValidApi] = useState({
    ok: true,
    status: null,
    url: '',
  });

  useEffect(() => {
    setLoading(true);
    
    const dataQueue = links.map(link => (
      fetch(link)
        .then(res => {
          const { ok, status, url } = res;
          setIsValidApi(prev => ({ ...prev, ok, status, url }));

          if (!res.ok) {
            throw new Error(`API returned a status code of ${status}`);
          }

          return res.json();
        })
    ));

    Promise.all(dataQueue)
      .then(res => {
        setData(prev => [...prev, ...res])
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, [links]);

  return { data, loading, isValidApi };
}