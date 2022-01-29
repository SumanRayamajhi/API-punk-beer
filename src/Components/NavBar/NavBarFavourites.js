import React from "react";
import "./NavBar.css";

function NavBarFavourites({ favourites }) {
  return (
    <div className="Nav-favourite">
      <h2 style={{ textDeoration: "none" }}>
        Favourites<span>{favourites.length}</span>
      </h2>
    </div>
  );
}

export default NavBarFavourites;
