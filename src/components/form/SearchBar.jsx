import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const sortingOptions = {
    // remplir les key:value en fonction de l'API et du sort_by
  };

  return (
    <form action="#">
      <div>
        <input type="button" value="Best Match" />
        <input type="button" value="Highest Rated" />
        <input type="button" value="Most Reviewed" />
      </div>
      <div>
        <input
          className="basis-100"
          type="text"
          placeholder="What kind of food are you looking for ?"
        />
        <input
          type="text"
          placeholder="What city do you live in ?"
          className="basis-100"
        />
      </div>
      <div>
        <input type="submit" value="Let's Go" />
      </div>
    </form>
  );
}
