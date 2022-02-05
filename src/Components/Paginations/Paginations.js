import React from "react";
import "./Pagination.css";

function Paginations({
  currentPage,
  paginationHandler,
  currentNumbersOfItems,
  showPerPage,
}) {
  const onButtonClick = (type) => {
    if (type === "prev") {
      paginationHandler(currentPage - 1);
    } else if (type === "next") {
      paginationHandler(currentPage + 1);
    }
  };

  const previousButton =
    currentPage > 1 ? (
      <button
        className="btn btn-primary button"
        onClick={() => onButtonClick("prev")}
      >
        Prev
      </button>
    ) : (
      <button className="btn btn-primary button">Prev</button>
    );

  const nextButton =
    currentNumbersOfItems === showPerPage ? (
      <button
        className="btn btn-primary button"
        onClick={() => onButtonClick("next")}
      >
        Next
      </button>
    ) : (
      <button className="btn btn-primary button">Next</button>
    );

  return (
    <div className="d-flex justify-content-center">
      {previousButton}
      <div className="mx-4 Paginations__CurrentPage">{currentPage}</div>
      {nextButton}
    </div>
  );
}

export default Paginations;
