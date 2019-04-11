import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AlertDemo from './pages/alert';

const App = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="card text-white bg-dark mb-3 col-2">
          <div className="card-header">Components</div>
          <ul className="card-body">
            <li className="list-group-item"><Link to="/alert">Alert</Link></li>
          </ul>
        </div>
        <div className="col-10 overflow-scroll">
          <Route exact path="/alert" component={AlertDemo} />
        </div>
      </div>

    </div>
  </Router>
);

export default App;
