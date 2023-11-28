import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import './Styles/main.css';
import Tables from './Components/Table';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [data, setData] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://course-api.com/react-tours-project", {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [refreshFlag]);

  const handleRefresh = async () => {
    setRefreshFlag(true);
    setData(await new Promise(resolve => setTimeout(resolve, 0)))
    setRefreshFlag(false);
  };

  return (
    <main className="App body">
      <header className="App-header container menu">
        {data ? (<Tables places={data}/>) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <button onClick={handleRefresh} >Refresh</button>
      </header>
    </main>
  );
}

export default App;
