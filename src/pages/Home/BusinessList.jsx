import React from "react";
import BusinessCard from "./BusinessCard";
import listOfBusinesses from "../../data/BusinessData";

export default function BusinessList() {
  return (
    // renvoie une div avec, pour chaque élément du tableau listOfBusinesses, un composant BusinessCard
    <div className="flex-row">
      {listOfBusinesses.map((business, index) => {
        return <BusinessCard key={index} {...business} />;
      })}
    </div>
  );
}
