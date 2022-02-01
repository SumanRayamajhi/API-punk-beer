import React from "react";
import Beer from "../Beer/Beer.js";
import "./HomePage.css";

function HomePage({ beers, onFavouriteAdd, onFavouriteRemove }) {
  return (
    <div className=" ">
      <h1>List of Beers</h1>
      <div className="row HomePage_container">
        {beers.map((beer) => (
          <div className=" row HomePage_body">
            <Beer
              key={beer.id}
              onFavouriteAdd={onFavouriteAdd}
              onFavouriteRemove={onFavouriteRemove}
              beer={beer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
