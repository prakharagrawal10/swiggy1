// src/components/FoodItems.js
import React, { useState } from 'react';

// Import images from your assets folder
import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import saladImage from '../assets/salad.jpg';

// Sample data for food items with names, image imports, and initial quantity
const initialFoodItems = [
  { id: 1, name: 'Pizza', image: pizzaImage, quantity: 0 },
  { id: 2, name: 'Burger', image: burgerImage, quantity: 0 },
  { id: 3, name: 'Salad', image: saladImage, quantity: 0 }
];

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState(initialFoodItems);

  const handleAddItem = (id) => {
    const updatedItems = foodItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setFoodItems(updatedItems);
  };

  return (
    <div className="food-items">
      <h2>Food Items</h2>
      <div className="items-container">
        {foodItems.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAddItem(item.id)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
