import React, { useState, useEffect } from 'react';

const blue = {
  color: 'blue',
};

const TopArtists = ({lst}) => {
  const ArtistsItems = () => lst.map((item, index) => {
    // TODO: Replace this with an actual class
    const style = item.name == 'keshi' ? blue : {};
    return (
      <li style={style} key={item.name}>{item.name}</li>
    )
  });

  return (
    <ul>
      <ArtistsItems />
    </ul>
  );
}

const TopTracks = ({lst}) => {
  let numKSongs = 0;

  for (let i = 0; i < lst.length; i++) {
    for (let j = 0; j < lst[i].artists.length; j++) {
      if (lst[i].artists[j].name == 'keshi') {
        numKSongs++;
      }
    }
  }

  const TracksItems = () => lst.map((item, index) => {
    let style = {};

    for (let i = 0; i < item.artists.length; i++) {
      if (item.artists[i].name == 'keshi') {
        numKSongs++;
        style = blue;
        break;
      }
    }

    return (
      <li style={style} key={item.name}>{item.name}</li>
    )
  });

  return (
    <div>
      <ul>
        <TracksItems />
      </ul>
      <p>{numKSongs} of your top 10 songs have keshi on them</p>
    </div>
  );
}

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
      <TopArtists lst={topArtists} />
      <TopTracks lst={topTracks} />
    </div>
  );
}
