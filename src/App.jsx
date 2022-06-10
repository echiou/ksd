import React, { useState, useEffect } from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import GraphScreen from './GraphScreen';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    var mToken = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {})['access_token'];
    if (mToken) {
      setToken(mToken);
    }
    console.log('hey');
  }, []);

  return (
    <div className="App-body">
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            '%20',
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {token && <GraphScreen token={token} />}
    </div>
  );
};

export default App;
