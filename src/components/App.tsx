import React, { useState, useEffect } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";
import hash from "./hash";
import GraphScreen from "./GraphScreen";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
    }

  })
  return (
    <div>

      <body className="App-body">
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {token && (
          <GraphScreen token={token} />
        )}
      </body>
    </div>
  );

}

export default App;
