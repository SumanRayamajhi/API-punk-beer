import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import SearchTerm from "./Components/SearchTerm/SearchTerm";
import FavouritesPage from "./Components/FavouritesPage/FavouritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paginations from "./Components/Paginations/Paginations";
import NavBar from "./Components/NavBar/NavBar";
import BeerDescription from "./Components/BeerDescription/BeerDescription";

function App() {
  const [beers, setBeers] = useState([]);
  const [favouriteBeers, setFavouriteBeers] = useState({});

  useEffect(() => {
    const beersFromLocalStorage = JSON.parse(
      localStorage.getItem("punk-beer-favourite")
    );
    setFavouriteBeers(beersFromLocalStorage || {});
  }, []);

  useEffect(() => {
    saveToLocalStorage(favouriteBeers);
  }, [favouriteBeers]);

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

    setBeers(beers);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("punk-beer-favourite", JSON.stringify(items));
  };

  const getBeerId = (beerId) => {
    for (let beer of beers) {
      if (beer.id === beerId) {
        return beer;
      }
    }
    return null;
  };

  const handleFavouriteAdd = (beerId) => {
    console.log(beerId);
    const favouriteBeer = getBeerId(beerId);
    let newFavouriteBeeers = { ...favouriteBeers };
    newFavouriteBeeers[favouriteBeer.id] = favouriteBeer;
    setFavouriteBeers(newFavouriteBeeers);
    console.log(favouriteBeer);
  };

  //remove element of object javascript - delete

  const handleFavouriteRemove = (beerId) => {
    let newFavouriteBeeers = { ...favouriteBeers };
    delete newFavouriteBeeers[beerId];
    setFavouriteBeers(newFavouriteBeeers);
  };

  const paginationHandler = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <Router>
      <div className="movie-app">
        <NavBar favourites={favouriteBeers} />
        <div className="container App_container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="App_container">
                  <SearchTerm
                    search={search}
                    searchHandler={searchHandler}
                    className="searchTerm"
                  />
                  <div className="App_card">
                    <HomePage
                      beers={beers}
                      favouriteBeers={favouriteBeers}
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
                  <SearchTerm
                    search={search}
                    searchHandler={searchHandler}
                    className="searchTerm"
                  />
                  <div className="App_card">
                    <FavouritesPage
                      beers={favouriteBeers}
                      onFavouriteRemove={handleFavouriteRemove}
                    />
                  </div>
                </div>
              }
            ></Route>
            <Route
              exact
              path="/beer-descriptions/:id"
              element={<BeerDescription beers={beers} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
