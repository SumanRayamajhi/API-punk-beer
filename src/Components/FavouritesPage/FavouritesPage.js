import React from "react";
import { Container, Row } from "react-bootstrap";
import Beer from "../Beer/Beer.js";
import "./FavouritesPage.css";

function FavouritesPage({ beers, onFavouriteRemove }) {
  let beersArr = [];
  for (let i in beers) {
    beersArr.push(beers[i]);
  }
  return (
    <Container className="FavouritesPage_container">
      <h1>Favourite Beers</h1>
      <Row className="FavouritesPage_row">
        {beersArr.map((beer) => (
          <Beer
            key={beer.id}
            beer={beer}
            onFavouriteRemove={onFavouriteRemove}
            isFavourite={true}
          />
        ))}
      </Row>
    </Container>
  );
}

export default FavouritesPage;
