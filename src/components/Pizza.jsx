import React from "react";

const Pizza = ({ photoName, name, ingredients, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : " "}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </li>
  );
};

export default Pizza;
