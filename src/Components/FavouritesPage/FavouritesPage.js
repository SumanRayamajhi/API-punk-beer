import React from "react";
import { Container, Row } from "react-bootstrap";
import Beer from "../Beer/Beer.js";
import "./FavouritesPage.css";

function FavouritesPage({ beers, onFavouriteRemove }) {
  return (
    <Container className="FavouritesPage_container">
      <h1>Favourite Beers</h1>
      <Row className="FavouritesPage_row">
        {beers.map((beer) => (
          <Beer
            key={beer.id}
            beer={beer}
            onFavouriteRemove={onFavouriteRemove}
          />
        ))}
      </Row>
    </Container>
  );
}

export default FavouritesPage;
