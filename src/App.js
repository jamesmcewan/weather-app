import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="weather-app">
        <h1>Edinburgh GB</h1>
        <div className="current-date">
          <h2>Sunday 11 March 2018</h2>
          <div className="current-date__data">
            <h3>Current Forcast: Rain - light rain</h3>
            <p>Icon</p>
            <h3>Temperature (c)</h3>
            <ul>
              <li>Average: 281.15</li>
              <li>Min: 281.15</li>
              <li>Max: 281.15</li>
            </ul>
          </div>
        </div>
        <nav className="forcast">
          <button className="forcast__day forcast__day--selected">
            Sun
            <img src="icons/01d.png" alt="" />
          </button>

          <button className="forcast__day">
            Sun
            <img src="icons/01d.png" alt="" />
          </button>

          <button className="forcast__day">
            Sun
            <img src="icons/01d.png" alt="" />
          </button>

          <button className="forcast__day">
            Sun
            <img src="icons/01d.png" alt="" />
          </button>

          <button className="forcast__day">
            Sun
            <img src="icons/01d.png" alt="" />
          </button>
        </nav>
      </div>
    );
  }
}

export default App;
