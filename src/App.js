import React, { useState, useEffect } from "react";
import "./App.css";
import BeersList from "./Components/BeersList/BeersList";
import SearchTerm from "./Components/SearchTerm/SearchTerm";
import AddFavourites from "./Components/AddFavourites/AddFavourites";
import NavBar from "./Components/NavBar/NavBar";
import Favourites from "./Components/Favourites/Favourites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paginations from "./Components/Paginations-new/Paginations-new";

// - HomePage
//   - BeerList
//     - Beer

// - FavouritesPage
//   - BeerList
//     - Beer

// const markFavourites = (beers) => {
//   const favouriteBeers = localStorage.getItem("punk-beer-favourite");

// Iterate over `beers`
// For each beeer, if the the beer is included in your favourite beers in localstorage,
// set `isFavourite` to true, otherwise set `isFavourite` to false.

//   beers.map(beer => {
//     return {
//       ...beer,
//       isFavourite: beer is in list? true: false
//     }
//   })

// Then return the new list of beers inclding the new field.
// };

// const markFavourites = (beers) => {
//   const favouriteBeers = localStorage.getItem("punk-beer-favourite");

//   beers.map((beer) => {
//     return {
//       ...beer,
//       isFavourite: beer.id ? true : false,
//     };
//   });
//   return {
//     ...beers.isFavourite,
//     favouriteBeers,
//   };
// };

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [showPerPage, setShowPerPage] = useState(6);
  const [pageNumber, setPageNumber] = useState({
    start: 0,
    end: showPerPage,
  });

  useEffect(() => {
    getBeerApi();
  }, [query]);

  const getBeerApi = async () => {
    let url;
    if (query === "") {
      url = `https://api.punkapi.com/v2/beers`;
    } else {
      url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
    }
    const response = await fetch(url);
    const beers = await response.json();

    // Mark favourite beers
    // const beersWithFavourites = markFavourites(beers);

    // const beersWithFavourites = markFavourites(beers);
    // console.log(beersWithFavourites);

    setBeers(beers);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const getHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    const favouriteBeers = JSON.parse(
      localStorage.getItem("punk-beer-favourite")
    );
    if (favouriteBeers) {
      setFavourites(favouriteBeers);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("punk-beer-favourite", JSON.stringify(items));
  };

  const addFavouriteBeer = (beer) => {
    const newFavouriteList = [...favourites, beer];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteBeer = (beer) => {
    const removeFavourite = favourites.filter(
      (favourite) => favourite.id !== beer.id
    );
    setFavourites(removeFavourite);
    saveToLocalStorage(removeFavourite);
  };

  const paginationHandler = (start, end) => {
    setPageNumber({ start: start, end: end });
  };

  return (
    <Router>
      <div className="App container-fluid movie-app">
        <div>
          <NavBar favourites={favourites} />
          <SearchTerm
            getHandler={getHandler}
            search={search}
            searchHandler={searchHandler}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="App_container">
                  <div className="App_card">
                    <BeersList
                      total={beers.length}
                      showPerPage={showPerPage}
                      paginationHandler={paginationHandler}
                      paginations={Paginations}
                      start={pageNumber.start}
                      end={pageNumber.end}
                      beers={beers}
                      handleFavouritesClick={addFavouriteBeer}
                      AddFavourites={AddFavourites}
                    />
                  </div>
                </div>
              }
            ></Route>
            <Route
              exact
              path="/favourites"
              element={
                <div className="App_container">
                  <div className="App_card">
                    <Favourites
                      beers={favourites}
                      handleFavouritesClick={removeFavouriteBeer}
                    />
                  </div>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
