import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Beer.css";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

function Beer({ beer, isFavourite, onFavouriteAdd, onFavouriteRemove }) {
  let link = `/beer-descriptions/${beer.id}`;

  return (
    <Card className="mt-3 beer_body">
      <div className="beer-container">
        <Card.Img
          variant="top"
          src={beer.image_url}
          alt="..."
          className="beer_image"
        />
        <Card className="border-0 beer_card_body">
          <Card.Body>
            <Card.Title className="beer_card_title">
              {" "}
              <h5>{beer.name}</h5>
              {isFavourite ? (
                <div
                  className="Beer_star"
                  onClick={() => onFavouriteRemove(beer.id)}
                >
                  <BsStarFill
                    className="Beer-filled-star"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ) : (
                <div onClick={() => onFavouriteAdd(beer.id)}>
                  <BsStar
                    style={{ cursor: "pointer" }}
                    className="Beer-empty-star"
                  />
                </div>
              )}
            </Card.Title>
            <Card.Text className="beer_description">
              {beer.description}
            </Card.Text>
          </Card.Body>
          <Link to={link} style={{ textDecoration: "none" }}>
            <Button className="beer-learn-more">Learn More</Button>
          </Link>
        </Card>
      </div>
    </Card>
  );
}

export default Beer;
