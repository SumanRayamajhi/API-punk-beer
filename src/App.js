import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import SearchTerm from "./Components/SearchTerm/SearchTerm";
import NavBar from "./Components/NavBar/NavBar";
import FavouritesPage from "./Components/FavouritesPage/FavouritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paginations from "./Components/Paginations/Paginations";
// import Paginations from "./Components/Paginations-new/Paginations-new";

const findOutIfItIsFavourite = (beer, favouriteBeersIds) => {
  //list of ids from favouriteBeers

  return favouriteBeersIds.includes(beer.id);
};

const markFavourites = (beers) => {
  const beersFromLocalStorage = JSON.parse(
    localStorage.getItem("punk-beer-favourite")
  );
  const favouriteBeers = beersFromLocalStorage || [];

  const favouriteBeersIds = favouriteBeers.map((beer) => beer.id);

  const beersWithDetails = beers.map((beer) => {
    return {
      ...beer,
      isFavourite: findOutIfItIsFavourite(beer, favouriteBeersIds),
    };
  });

  return beersWithDetails;
};

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const showPerPage = 6;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getBeerApi();
  }, [search, pageNumber, showPerPage]);

  const getBeerApi = async () => {
    let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${showPerPage}`;
    if (search !== "") {
      url += `&beer_name=${search}`;
    }
    const response = await fetch(url);
    const beers = await response.json();

    const beersWithFavourites = markFavourites(beers);

    setBeers(beersWithFavourites);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("punk-beer-favourite", JSON.stringify(items));
  };

  const handleFavouriteAdd = (beerId) => {
    const newBeers = beers.map((beer) => {
      if (beer.id === beerId) {
        beer.isFavourite = true;
      }
      return beer;
    });
    setBeers(newBeers);
    const newFavouriteBeers = newBeers.filter((beer) => beer.isFavourite);
    saveToLocalStorage(newFavouriteBeers);
  };

  const handleFavouriteRemove = (beerId) => {
    const newBeers = beers.map((beer) => {
      if (beer.id === beerId) {
        beer.isFavourite = false;
      }
      return beer;
    });
    setBeers(newBeers);
    const newFavouriteBeers = newBeers.filter((beer) => beer.isFavourite);
    saveToLocalStorage(newFavouriteBeers);
  };

  const paginationHandler = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const favouriteBeers = beers.filter((beer) => beer.isFavourite);

  return (
    <Router>
      <div className="App container-fluid movie-app">
        <div>
          <NavBar favourites={favouriteBeers} />
          <SearchTerm search={search} searchHandler={searchHandler} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="App_container">
                  <div className="App_card">
                    <HomePage
                      beers={beers}
                      onFavouriteAdd={handleFavouriteAdd}
                      onFavouriteRemove={handleFavouriteRemove}
                    />
                  </div>
                  <Paginations
                    paginationHandler={paginationHandler}
                    currentPage={pageNumber}
                    currentNumbersOfItems={beers.length}
                    showPerPage={showPerPage}
                  />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/favourites"
              element={
                <div className="App_container">
                  <div className="App_card">
                    <FavouritesPage
                      beers={favouriteBeers}
                      onFavouriteRemove={handleFavouriteRemove}
                    />
                  </div>
                  <Paginations
                    paginationHandler={paginationHandler}
                    currentPage={pageNumber}
                    currentNumbersOfItems={beers.length}
                    showPerPage={showPerPage}
                  />
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
