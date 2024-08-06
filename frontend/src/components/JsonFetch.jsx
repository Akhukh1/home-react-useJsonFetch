import React from 'react';
import useJsonFetch from '../hooks/usejsonfetch';

export default function JsonFetch(props) {
  const { url } = props;
  const [ data, isLoading, hasError ] = useJsonFetch(url);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div>{'тест'}</div>
    </>
  )
}
