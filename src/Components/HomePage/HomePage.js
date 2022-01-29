import React from "react";

function HomePage({
  beers,
  handleFavouritesClick,
  AddFavourites,
  start,
  end,
  paginations,
  paginationHandler,
  showPerPage,
  total,
  BeersList,
}) {
  const Paginations = paginations;

  return (
    <div className="BeersList_container">
      <h1>Favourite Beers</h1>
      <div className="row">
        {beers.map((beer) => (
          <div>
            <BeersList
              beers={beers}
              handleFavouritesClick={handleFavouritesClick}
              AddFavourites={AddFavourites}
              start={start}
              end={end}
            />

            <Paginations
              showPerPage={showPerPage}
              paginationHandler={paginationHandler}
              total={total}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
