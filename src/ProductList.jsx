import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },

  { id: 4, name: "Rose", price: 12, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 18, category: "Outdoor" },
  { id: 6, name: "Sunflower", price: 14, category: "Outdoor" },

  { id: 7, name: "Cactus", price: 8, category: "Succulent" },
  { id: 8, name: "Jade Plant", price: 11, category: "Succulent" },
  { id: 9, name: "Agave", price: 16, category: "Succulent" }
];

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {["Indoor", "Outdoor", "Succulent"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(p => (
              <div key={p.id}>
                <p>{p.name} - ${p.price}</p>
                <button onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
