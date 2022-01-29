import React from "react";

function FavouritesPage({ BeersList, favourites, removeFavouritesClick }) {
  {
    /* <div style={{ cursor: "pointer" }}>⭐</div> */
  }
  return (
    <div className="BeersList_container">
      <h1>Favourite Beers</h1>
      <div className="row">
        {favourites.map((beer) => (
          <BeersList
            beer={beer}
            removeFavouritesClick={removeFavouritesClick}
          />
        ))}
      </div>
    </div>
  );
}

export default FavouritesPage;
