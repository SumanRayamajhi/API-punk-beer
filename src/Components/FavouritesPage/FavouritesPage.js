import React from "react";
import Beer from "../Beer/Beer.js";

function FavouritesPage({ beers, onFavouriteRemove }) {
  return (
    <div className="Beer_container">
      <h1>Favourite Beers</h1>
      <div className="row">
        {beers.map((beer) => (
          <Beer
            key={beer.id}
            beer={beer}
            onFavouriteRemove={onFavouriteRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default FavouritesPage;
