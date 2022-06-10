import React, { useState, useEffect } from 'react';

export default function GraphScreen({ token }) {
  const axios = require('axios');
  const [isMounted, setIsMounted] = useState(false);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getTopArtistsTracks = async (token) => {
      const headers = {
        Authorization: 'Bearer ' + token,
      };

      // Top 10 artists
      await axios
        .get('https://api.spotify.com/v1/me/top/artists?limit=10', { headers })
        .then((response) => {
          setTopArtists(response.data.items);
        });

      // Top 10 tracks
      await axios
        .get('https://api.spotify.com/v1/me/top/tracks?limit=10', { headers })
        .then((response) => {
          setTopTracks(response.data.items);
        });

      setIsMounted(true);
    };

    getTopArtistsTracks(token);
  }, []);

  if (!isMounted)
    return (
      <div className="GraphScreen">
        <header className="App-header">mounting</header>
      </div>
    );
  return (
    <div className="GraphScreen">
      <ul>
        {topArtists.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {topTracks.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
