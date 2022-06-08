import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

const IndexPage: React.FC = () => {
  return (
    <main>
      <App />
      {/* <section>
          <div className="hero level fullscreen">
            <div className="level-item w-100">
              <App />
            </div>
          </div>
        </section> */}
    </main>
  );
};

export default IndexPage;
