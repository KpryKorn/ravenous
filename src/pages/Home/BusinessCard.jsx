import React from "react";
import "./BusinessCard.css";

export default function BusinessCard() {
  return (
    <div className="business-card">
      <div>
        <img src="../src/assets/pizza.jpeg" alt="Photo de pizza" />
      </div>
      <h3>Restaurant Cheval D'Or</h3>
      <div className="split">
        <div>
          <p>11 rue Mançay</p>
          <p>Plailly</p>
          <p>60128</p>
        </div>
        <div className="text-end">
          <p>FRANÇAIS</p>
          <p>4.3 étoiles</p>
          <p>7 avis</p>
        </div>
      </div>
    </div>
  );
}
