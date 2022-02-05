import React from "react";
import { Container, Row } from "react-bootstrap";
import Beer from "../Beer/Beer.js";
import "./HomePage.css";

function HomePage({
  beers,
  BeerDescription,
  onFavouriteAdd,
  onFavouriteRemove,
}) {
  return (
    <Container className="HomePage_container">
      <h2 className="HomePage_heading"> Punk Beers</h2>
      <Row className="HomePage_row">
        {beers.map((beer) => (
          <Beer
            key={beer.id}
            onFavouriteAdd={onFavouriteAdd}
            onFavouriteRemove={onFavouriteRemove}
            beer={beer}
            BeerDescription={BeerDescription}
          />
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
