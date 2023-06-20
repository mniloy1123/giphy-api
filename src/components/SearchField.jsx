import { useState } from "react";
import PropTypes from "prop-types"; //for eslint validation
import HomeIcon from "@mui/icons-material/Home";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleHomeClick = () => {
    window.location.reload(); // Reload the page
  };

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      onSearch(trimmedSearchTerm);
    }
  };

  return (
    <div className="container">
      <HomeIcon
        color="secondary"
        fontSize="large"
        onClick={handleHomeClick}
        style={{ cursor: "pointer" }}
      />
      <input
        className="searchBar"
        type="text"
        placeholder="Search Gifs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
//ensuring that the onSearch prop is a function
SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
