import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <div className="reactify-docs__container">
    <div>
      <ul>
        <li><Link to="/"></Link></li>
      </ul>
    </div>
    <Router>

      <hr />
      <Route path="/" component={undefined} />
    </Router>
  </div>
);

export default App;
