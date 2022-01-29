import React from "react";
import "./BeersList.css";

function BeersList({
  beers,
  start,
  end,
  handleFavouritesClick,
  AddFavourites,
}) {
  return (
    <div className="row">
      {beers.slice(start, end).map((beer) => (
        <div className="card 3 each-card" style={{ width: "24rem" }}>
          <div className="image">
            <img src={beer.image_url} className="card-img-top" alt="..." />
          </div>

          <div className="card-body">
            <div className="heading-star">
              <h5 className="card-title">{beer.name}</h5>
              <div
                onClick={() => handleFavouritesClick(beer)}
                classNameName="star"
              >
                <AddFavourites />
              </div>
            </div>

            <p className="card-text text">{beer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BeersList;
