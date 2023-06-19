import { useState, useEffect } from "react";

const GifCard = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestTrendingGifs();
  }, []);

  async function requestTrendingGifs() {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );
    const data = await res.json();
    const gifData = data.data;
    setGifs(gifData);
  }

  return (
    <div>
      {gifs.map((gif) => (
        <img
          key={`gif-card-${gif.id}`}
          src={gif.images.fixed_height.url}
          alt="GIF"
        />
      ))}
    </div>
  );
};

export default GifCard;
