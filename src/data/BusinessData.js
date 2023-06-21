class Restaurant {
  constructor(name, address, city, zipCode, category, rating, reviewCount) {
    this._name = name;
    this._address = address;
    this._city = city;
    this._zipCode = zipCode;
    this._category = category;
    this._rating = rating;
    this._reviewCount = reviewCount;
  }
}

export const chevalDor = new Restaurant(
  "Restaurant Cheval D'Or",
  "11 Rue Mançay",
  "PLAILLY",
  "60128",
  "FRANÇAIS",
  4.3,
  7
);
