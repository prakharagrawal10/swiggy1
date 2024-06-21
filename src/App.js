import React, { useState } from 'react';
import './App.css';

// Sample data for food items with names and image filenames
const initialFoodItems = [
  { id: 1, name: 'Pizza', image: 'pizza.jpg' },
  { id: 2, name: 'Burger', image: 'burger.jpg' },
  { id: 3, name: 'Salad', image: 'salad.jpg' }
];

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState(initialFoodItems);

  const handleAddItem = (id) => {
    const newItem = {
      id: id,
      name: `Food Item ${id}`
      // Add other properties as needed
    };
    setFoodItems([...foodItems, newItem]);
  };

  return (
    <div className="food-items">
      <h2>Food Items</h2>
      <div className="items-container">
        {foodItems.map(item => (
          <div key={item.id} className="item">
            <img src={require(`./assets/${item.image}`).default} alt={item.name} />
            <p>{item.name}</p>
            <button onClick={() => handleAddItem(item.id)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FoodItems />
    </div>
  );
}

export default App;
