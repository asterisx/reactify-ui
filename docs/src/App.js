import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="reactify-docs__container">
          <div className="pr-2">
            Components
            <ul className="reactify-docs__components-list">
              <li><Link to="/full-screen"></Link></li>
            </ul>
          </div>
          <div className="p-3">
            <Route exact path="/full-screen" component={undefined} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
