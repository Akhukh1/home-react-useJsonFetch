import { useState } from 'react';
import './App.css';
import JsonFetch from './components/JsonFetch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JsonFetch url='http://localhost:7070/data' />
      <JsonFetch url='http://localhost:7070/error' />
      <JsonFetch url='http://localhost:7070/loading' />
    </>
  )
}

export default App
