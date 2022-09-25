import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return <input onInput={(e) => setSearchTerm(e.target.value)} type="text" />;
};

export default SearchBar;
