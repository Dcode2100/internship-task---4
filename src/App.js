import './App.css';
import React, { useState } from 'react';
import CardList from './components/Cardlist';
import Header from './components/Header';

function App() {
    const [fetchTrigger, setFetchTrigger] = useState(false);

  return (
    <div className="App">
      <Header setFetchTrigger={setFetchTrigger} />
      <CardList fetchTrigger={fetchTrigger} />
    </div>
  );
}

export default App;
