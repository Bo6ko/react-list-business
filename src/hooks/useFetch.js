import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await axios(url);
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
};
