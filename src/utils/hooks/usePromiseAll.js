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
    const dataQueue = links.map(link => (
      fetch(link)
        .then(res => {
          const { ok, status, url } = res;
          setLoading(true);

          if (!res.ok) {
            setIsValidApi(prev => ({ ...prev, ok, status, url }));
            setLoading(false);
            throw new Error(`API returned a status code of ${status}`);
          }

          return res.json();
        })
    ));

    Promise.all(dataQueue)
      .then(res => {
        setData(prev => [...prev, ...res])
        setLoading(false);
      })
      .catch((error) => console.error(error));

  }, [links]);

  return { data, loading, isValidApi };
}