import React, { useState } from "react";

export default function CartItem() {
  const [cart, setCart] = useState([]);

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].qty > 1) {
      newCart[index].qty -= 1;
      setCart(newCart);
    }
  };

  const remove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => increase(i)}>+</button>
          <button onClick={() => decrease(i)}>-</button>
          <button onClick={() => remove(i)}>Delete</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}
