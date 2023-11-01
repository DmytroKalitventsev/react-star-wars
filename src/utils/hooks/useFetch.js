import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isValidApi, setIsValidApi] = useState({
    ok: true,
    status: null,
    url: '',
  });

  useEffect(() => {
    fetch(api)
      .then(res => {
        const { ok, status, url } = res;

        if (!res.ok) {
          setIsValidApi(prev => ({ ...prev, ok, status, url }));
          throw new Error(`API returned a status code of ${status}`);
        }

        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));

  }, [api]);

  return { data, loading, isValidApi };
}