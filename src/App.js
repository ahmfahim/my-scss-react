import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import React, { useState, createContext } from 'react';

// context api

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]} className="App">
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider  >
  );
}

export default App;
