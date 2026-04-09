import React, { useState } from "react";

export default function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      qty: 1,
      img: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      qty: 1,
      img: "https://via.placeholder.com/100"
    }
  ]);

  // Increase quantity
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  // Decrease quantity
  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  // Remove item
  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total cart amount (dynamic)
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div id="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >
          {/* IMAGE (FIXED) */}
          <img src={item.img} alt={item.name} />

          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.qty}</p>

          {/* BUTTONS */}
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => remove(item.id)}>Delete</button>

          {/* ITEM TOTAL */}
          <p>Total: ${item.price * item.qty}</p>
        </div>
      ))}

      {/* TOTAL CART */}
      <h3>Total Cart Amount: ${total}</h3>

      {/* CHECKOUT */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br /><br />

      {/* FIXED NAVIGATION */}
      <button onClick={() => window.location.href = "#plants"}>
        Continue Shopping
      </button>
    </div>
  );
}
