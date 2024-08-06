import React from 'react';
import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
// export const useJsonFetch = (url) => {
  const [data, setData] = useState();
  const [hasError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  console.log(url)

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(jsonData => setData(jsonData))
    .then(() => setLoading(false))
    .catch(error => setError(error));
  }, []);

  return [  data, isLoading, hasError  ];

}
