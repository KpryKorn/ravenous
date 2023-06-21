import React from "react";
import BusinessCard from "./BusinessCard"; // essayer avec l'import du composant, et les props

export default function BusinessList() {
  let listOfBusinesses = [
    {
      name: "Istanbul Kebab",
      address: "8 Rue de Paris",
      city: "PLAILLY",
      zipCode: "60128",
      category: "Fast Food",
      rating: 4.6,
      reviewCount: 15,
      imageSrc:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      name: "La Marguerite",
      address: "81 Rue François",
      city: "PLAILLY",
      zipCode: "60128",
      category: "CORSE",
      rating: 3.6,
      reviewCount: 81,
      imageSrc:
        "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      name: "McDonalds",
      address: "1 avenue Hoche",
      city: "PANTIN",
      zipCode: "93500",
      category: "Fast Food",
      rating: 4.1,
      reviewCount: 145,
      imageSrc:
        "https://images.unsplash.com/photo-1567667778211-b19f5a4e1efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ];
  //   de préférence utiliser un composant avec des props, à voir plus tard
  return (
    <div className="flex-row">
      {listOfBusinesses.map((business) => {
        return (
          <div className="business-card">
            <div>
              <img src={business.imageSrc} alt="Photo de pizza" />
            </div>
            <h3>{business.name}</h3>
            <div className="split">
              <div>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.zipCode}</p>
              </div>
              <div className="text-end">
                <p id="business-category">{business.category}</p>
                <p id="business-stars">{business.rating} étoiles</p>
                <p>{business.reviewCount} avis</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
