import React from "react";
import {type pizzaData } from "../App";

type MainProps = {
  pizzas: pizzaData;
};

const Main: React.FC<MainProps> = ({ pizzas }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'blueviolet' }}>Menu</h1>
      <ul className="pizzas">
        {pizzas.map((item) => (
          <li key={item.name} className={`pizza ${item.soldOut ? 'sold-out' : ''}`}>
            <img
              src={item.photoName}
              alt={item.photoName}
              style={{ width: '12rem', aspectRatio: '1', alignSelf: 'start' }}
            />
            <div className="pizza-details">
              <h1>{item.name}</h1>
              <p>{item.ingredients}</p>
              <span>Price: ₹{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
