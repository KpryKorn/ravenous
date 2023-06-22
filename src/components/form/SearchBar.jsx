import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form action="#">
      <input
        type="text"
        placeholder="What kind of food are you looking for ?"
      />
      <input type="text" placeholder="What city do you live in ?" />
      <input type="submit" value="Let's Go" />
    </form>
  );
}
