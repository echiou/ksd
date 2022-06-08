import React, { useState, useEffect } from 'react';
export default function GraphScreen({ token }) {
  const axios = require('axios');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let topArtists = [];
    let topTracks = [];
    const getTopArtistsTracks = async (token) => {
      const headers = {
        Authorization: 'Bearer ' + token,
      };

      // Top 10 artists
      await axios
        .get('https://api.spotify.com/v1/me/top/artists?limit=10', { headers })
        .then((response) => {
          topArtists = response.data.items;
        });
      topArtists.map((artist, index) => {
        console.log(artist.name);
      });

      // Top 10 tracks
      await axios
        .get('https://api.spotify.com/v1/me/top/tracks?limit=10', { headers })
        .then((response) => {
          topTracks = response.data.items;
        });
      topTracks.map((track, index) => {
        console.log(track.name);
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
      <p>see u soon</p>
    </div>
  );
}
