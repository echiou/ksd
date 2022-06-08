import React, { useState, useEffect } from "react";
export default function GraphScreen({ token }) {
    // const [artistToGenres, setArtistToGenres] = useState([]);
    // const [dataObj, setDataObj] = useState({});
    const axios = require("axios");
    // const [piData, setPiData] = useState({})
    const [isMounted, setIsMounted] = useState(false);

    const indexOfMax = (arr) => {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    }
    useEffect(() => {
        let topArtists = [];
        let topTracks = [];
        const getTopArtistsTracks = async (token) => {
            const headers = {
                "Authorization": "Bearer " + token
            };

            // Top 10 artists
            await axios.get("https://api.spotify.com/v1/me/top/artists?limit=10", { headers }).then((response) => {
                topArtists = response.data.items;

            })
            topArtists.map((artist, index)=>{
                console.log(artist.name);
            })

            // Top 10 tracks
            await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=10", { headers }).then((response) => {
                topTracks = response.data.items;

            })
            topTracks.map((track, index)=>{
                console.log(track.name);
            })

            setIsMounted(true);
        }
        getTopArtistsTracks(token);
    }, [])


    if (!isMounted)
        return (
            <div className="GraphScreen">
                <header className="App-header">
                    mounting
                </header>
            </div>
        )
    return (
            <div className="GraphScreen">
                <p>see u soon</p>
            </div>
    );
};