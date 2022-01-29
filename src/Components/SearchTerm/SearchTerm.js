import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchTerm.css";

function SearchTerm({ search, searchHandler, getHandler }) {
  return (
    <div className="SearchTerm_Main">
      <form onSubmit={getHandler}>
        <div className="">
          <input
            className="SearchTerm_Body"
            type="text"
            placeholder="Search for Beer..."
            value={search}
            onChange={searchHandler}
          />
        </div>
        <button className="search-btn">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchTerm;
