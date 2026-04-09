import React, { useState } from "react";

export default function CartItem() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 10, qty: 1 }
  ]);

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => remove(item.id)}>Delete</button>

          <p>Total: ${item.price * item.qty}</p>
        </div>
      ))}

      <h3>Total Cart Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button onClick={() => window.location.href = "#plants"}>
        Continue Shopping
      </button>
    </div>
  );
}
