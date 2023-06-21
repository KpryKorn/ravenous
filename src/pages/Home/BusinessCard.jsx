import React from "react";
import "./BusinessCard.css";
import { chevalDor } from "../../data/BusinessData.js";

export default function BusinessCard() {
  return (
    <div className="business-card">
      <div>
        <img src="../src/assets/pizza.jpeg" alt="Photo de pizza" />
      </div>
      <h3>{chevalDor._name}</h3>
      <div className="split">
        <div>
          <p>{chevalDor._address}</p>
          <p>{chevalDor._city}</p>
          <p>{chevalDor._zipCode}</p>
        </div>
        <div className="text-end">
          <p id="business-category">{chevalDor._category}</p>
          <p id="business-stars">{chevalDor._rating} étoiles</p>
          <p>{chevalDor._reviewCount} avis</p>
        </div>
      </div>
    </div>
  );
}
