import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 9, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 11, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Palm", price: 18, category: "Indoor", img: "https://via.placeholder.com/100" },

  { id: 7, name: "Rose", price: 14, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulip", price: 16, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Sunflower", price: 13, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Daisy", price: 10, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 11, name: "Lavender", price: 17, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Hibiscus", price: 19, category: "Outdoor", img: "https://via.placeholder.com/100" },

  { id: 13, name: "Cactus", price: 8, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 14, name: "Jade", price: 10, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 15, name: "Agave", price: 12, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 16, name: "Aloe", price: 9, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 17, name: "Echeveria", price: 11, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 18, name: "Sedum", price: 13, category: "Succulent", img: "https://via.placeholder.com/100" }
];

export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState([]);

  const addToCart = (id) => {
    setCartCount(cartCount + 1);
    setAdded([...added, id]);
  };

  return (
    <div id="plants">

      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", background: "#eee", padding: "10px" }}>
        <h3>Paradise Nursery</h3>
        <div>
          <a href="#top">Home</a> | 
          <a href="#plants"> Plants</a> | 
          <a href="#cart"> Cart 🛒({cartCount})</a>
        </div>
      </div>

      {["Indoor", "Outdoor", "Succulent"].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
              
              <img src={p.img} alt={p.name} />
              <p>{p.name}</p>
              <p>${p.price}</p>

              <button
                disabled={added.includes(p.id)}
                onClick={() => addToCart(p.id)}
              >
                {added.includes(p.id) ? "Added" : "Add to Cart"}
              </button>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
