import React from "react";
import "./BusinessCard.css";

export default function BusinessCard(props) {
  const {
    name,
    address,
    city,
    zipCode,
    category,
    rating,
    reviewCount,
    imageSrc,
  } = props;

  return (
    <div className="business-card">
      <div>
        <img src={imageSrc} alt="Photo de pizza" />
      </div>
      <h3>{name}</h3>
      <div className="split">
        <div>
          <p>{address}</p>
          <p>{city}</p>
          <p>{zipCode}</p>
        </div>
        <div className="text-end">
          <p id="business-category">{category}</p>
          <p id="business-stars">{rating} étoiles</p>
          <p>{reviewCount} avis</p>
        </div>
      </div>
    </div>
  );
}
