import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./BeerDescription.css";

function BeerDescription() {
  let { id } = useParams();

  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBeer(id);
  }, [id]);

  const fetchBeer = async (id) => {
    let url = ` https://api.punkapi.com/v2/beers/${id}`;
    fetch(url);
    const response = await fetch(url);
    if (response.status === 200) {
      const beer = await response.json();
      setBeer(beer[0]);
    } else {
      setError(true);
    }
  };

  if (error) {
    return <div>Error</div>;
  } else if (beer == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <Card className="BeerDescription_body">
        <h1 className="BeerDescription_title">
          {beer.name} - <span>{beer.volume.value} </span>{" "}
          <span>{beer.volume.unit}</span>
        </h1>

        <img
          className="BeerDescription_image"
          src={beer.image_url}
          alt={beer.name}
        />
        <p className="BeerDescription_description"> {beer.description}</p>
        <div className="BeerDescription_container">
          <h4>Ingredients</h4>
          <div className="BeerDescription_ingredients">
            <div className="BeerDescription_content">
              <h5>Malt</h5>
              <div>
                {beer.ingredients.malt.map((ing) => (
                  <div className="BeerDescription_ingredient">
                    <p>{ing.name}</p>
                    <p>
                      {ing.amount.value} - <span>{ing.amount.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="BeerDescription_content">
              <h5>Hops</h5>
              <div>
                {beer.ingredients.hops.map((hop) => (
                  <div className="BeerDescription_ingredient">
                    <p>{hop.name}</p>
                    <p>
                      {hop.amount.value} - <span>{hop.amount.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default BeerDescription;
