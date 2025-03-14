import React from "react";

const Pizza = (props) => {
  // console.log(props);

  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name} </h3>
        <p>{props.ingredients} </p>
        <span>${props.price} </span>
      </div>
    </li>
  );
};

export default Pizza;
