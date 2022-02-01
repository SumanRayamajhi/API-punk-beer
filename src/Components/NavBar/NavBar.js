import Home from "./Home";
import NavBarFavourites from "./NavBarFavourites";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ favourites }) => {
  return (
    <nav className="NavBar_Main">
      <div className="NavBar_Container">
        <h1 className="NavBar_Title">Punk Beer Api</h1>
        <div className="NavBar_Branch">
          <Link to="/" type="submit">
            <Home />
          </Link>
          <Link to="/favourites" type="submit">
            <NavBarFavourites favourites={favourites} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
