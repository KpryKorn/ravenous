import React from "react";
import "./HeroBanner.css";
import SearchBar from "../../components/form/Searchbar";

export default function HeroBanner() {
  return (
    <div id="hero-banner">
      <div className="container grid-center">
        <SearchBar />
      </div>
    </div>
  );
}
