import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';

const AsciiArt = styled.div`
    font-family: monospace;
    white-space: pre;
`;

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Here I am in a feature branch</h1>
      <p>Pretty sure as soon as I push Vercel will update me.</p>
    </main>
  );
}

export default App;
