import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="reactify-docs__container">
          <ul className="reactify-docs__components-list">
            <li><Link to='/'>Home</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={undefined} />
        </div>
      </Router>
    );
  }
}

export default App;
