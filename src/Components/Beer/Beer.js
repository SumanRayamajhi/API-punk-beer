import React from "react";
import "./Beer.css";
import EmptyStar from "../EmptyStar/EmptyStar";

function Beer({ beer, onFavouriteAdd, onFavouriteRemove }) {
  return (
    <div className="row Beer_body">
      <div className="card 3 each-card" style={{ width: "24rem" }}>
        <div className="image">
          <img
            src={beer.image_url}
            className="card-img-top Beer_image"
            alt="..."
          />
        </div>

        <div className="card-body Beer_body">
          <div className="heading-star">
            <h5 className="card-title">{beer.name}</h5>
            {beer.isFavourite ? (
              <div
                className="Beer_star"
                onClick={() => onFavouriteRemove(beer.id)}
              >
                ⭐
              </div>
            ) : (
              <div onClick={() => onFavouriteAdd(beer.id)}>
                <EmptyStar />
              </div>
            )}
          </div>
          <p className="card-text text">{beer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Beer;
