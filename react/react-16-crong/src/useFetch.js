import { useState, useEffect } from 'react';

const useFetch = (url, callback) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData);
    setLoading(false);
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
}

export default useFetch;