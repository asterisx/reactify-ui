import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AlertDemo from './pages/alert';
import BadgeDemo from './pages/badge';
import ButtonDemo from './pages/button';
import CheckBoxDemo from './pages/checkbox';
import LabelDemo from './pages/label';
import RadioInputDemo from './pages/radio-input';
import SwitchDemo from './pages/switch';

const App = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="card text-white bg-dark mb-3 col-2">
          <div className="card-header">Components</div>
          <ul className="card-body">
            <li className="list-group-item">
              <Link className="d-block" to="/alert">
                Alert
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/badge">
                Badge
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/button">
                Button
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/checkbox">
                Checkbox
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/label">
                Label
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/radio-input">
                Radio Input
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/switch">
                Switch
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 overflow-scroll">
          <Route exact path="/alert" component={AlertDemo} />
          <Route exact path="/badge" component={BadgeDemo} />
          <Route exact path="/button" component={ButtonDemo} />
          <Route exact path="/checkbox" component={CheckBoxDemo} />
          <Route exact path="/label" component={LabelDemo} />
          <Route exact path="/radio-input" component={RadioInputDemo} />
          <Route exact path="/switch" component={SwitchDemo} />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
