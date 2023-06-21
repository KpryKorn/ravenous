import React from "react";

export default function BusinessList() {
  const listOfBusinesses = [
    (istanbulKebab = {
      name: "Istanbul Kebab",
      address: "8 Rue de Paris",
      city: "PLAILLY",
      zipCode: "60128",
      category: "Fast Food",
      rating: 4.6,
      reviewCount: 15,
    }),
    (laMarguerite = {
      name: "La Marguerite",
      address: "81 Rue François",
      city: "PLAILLY",
      zipCode: "60128",
      category: "Gastronomique",
      rating: 3.6,
      reviewCount: 3,
    }),
    (mcDonalds = {
      name: "McDonalds",
      address: "1 avenue Hoche",
      city: "PANTIN",
      zipCode: "93500",
      category: "Fast Food",
      rating: 4.1,
      reviewCount: 145,
    }),
  ];
  return <ul></ul>;
}
