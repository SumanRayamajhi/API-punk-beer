import React from "react";

function Favourites({ beers, handleFavouritesClick }) {
  return (
    <div className="BeersList_container">
      <h1>Favourite Beers</h1>
      <div className="row">
        {beers.map((beer) => (
          <div className="card 3 each-card" style={{ width: "24rem" }}>
            <div className="image">
              <img src={beer.image_url} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <div className="heading-star">
                <h5 className="card-title">{beer.name}</h5>
                <div
                  onClick={() => handleFavouritesClick(beer)}
                  className="star"
                >
                  <div style={{ cursor: "pointer" }}>⭐</div>
                </div>
              </div>

              <p className="card-text text">{beer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
