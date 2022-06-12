import 'cirrus-ui';
import React, { useState, useEffect } from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config/config';
import GraphScreen from './components/GraphScreen';

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
  }, []);

  return (
    <div>
      <section>
        <div class="hero">
          <div class="hero-body">
            <div class="content u-center px-12-lg px-24-xl">
              <div class="min-w-50p">
                <h1 class="u-center">ksd</h1>
                {!token && (
                  <div class="u-center">

                    <a
                      className="btn btn--loginApp-link text-red-800"
                      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                        '%20',
                      )}&response_type=token&show_dialog=true`}
                    >
                      Login to Spotify
                    </a>
                  </div>
                )}
                {token && <GraphScreen token={token} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
