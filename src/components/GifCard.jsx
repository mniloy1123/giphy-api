import { useState, useEffect } from "react";
import SearchField from "./SearchField";

const GifCard = () => {
  const [gifs, setGifs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    requestTrendingGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestTrendingGifs() {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );
    const data = await res.json();
    const gifData = data.data;
    setGifs(removeDuplicates(gifData));
  }

  const handleSearch = async (searchTerm) => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    );
    const data = await res.json();
    const gifData = data.data;
    setSearchResults(removeDuplicates(gifData));
  };
  //Fix error about duplicate gifs with same id on console
  const removeDuplicates = (gifData) => {
    const uniqueGifs = [];
    const gifIds = new Set();
    for (const gif of gifData) {
      if (!gifIds.has(gif.id)) {
        uniqueGifs.push(gif);
        gifIds.add(gif.id);
      }
    }
    return uniqueGifs;
  };

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      <div>
        {searchResults.length > 0
          ? searchResults.map((gif) => (
              <img
                key={`search-${gif.id}`}
                src={gif.images.fixed_height.url}
                alt="GIF"
              />
            ))
          : gifs.map((gif) => (
              <img
                key={`trending-${gif.id}`}
                src={gif.images.fixed_height.url}
                alt="GIF"
              />
            ))}
      </div>
    </div>
  );
};

export default GifCard;
