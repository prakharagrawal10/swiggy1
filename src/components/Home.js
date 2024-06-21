// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import FoodItems from './FoodItems';

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      
      <FoodItems />
    </div>
  );
}

export default Home;
