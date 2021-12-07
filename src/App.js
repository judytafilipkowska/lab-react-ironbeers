import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AllBeersPage from './pages/AllBeersPage/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage/BeerDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
