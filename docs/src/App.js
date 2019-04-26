import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AlertDemo from './pages/alert';
import BadgeDemo from './pages/badge';
import ButtonDemo from './pages/button';
import CardDemo from './pages/card';
import CheckBoxDemo from './pages/checkbox';
import FullScreenDemo from './pages/full-screen';
import HorizontalCardDemo from './pages/horizontal-card';
import LabelDemo from './pages/label';
import LegendDemo from './pages/legend';
import RadioInputDemo from './pages/radio-input';
import StackedCardDemo from './pages/stacked-card';
import SwitchDemo from './pages/switch';
import SnackBarDemo from './pages/snackbar';
import UserProfileDemo from './pages/user-profile';

const App = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="card text-white bg-dark mb-3 col-2">
          <h3 className="card-header">Components</h3>
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
              <Link className="d-block" to="/card">
                Card
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/checkbox">
                Checkbox
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/full-screen">
                FullScreen
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/horizontal-card">
                Horizontal Card
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/label">
                Label
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/legend">
                Legend
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/radio-input">
                Radio Input
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/stacked-card">
                Stacked Card
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/switch">
                Switch
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/snackbar">
                SnackBar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/user-profile">
                User Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 overflow-scroll">
          <Route exact path="/alert" component={AlertDemo} />
          <Route exact path="/badge" component={BadgeDemo} />
          <Route exact path="/button" component={ButtonDemo} />
          <Route exact path="/card" component={CardDemo} />
          <Route exact path="/checkbox" component={CheckBoxDemo} />
          <Route exact path="/full-screen" component={FullScreenDemo} />
          <Route exact path="/horizontal-card" component={HorizontalCardDemo} />
          <Route exact path="/label" component={LabelDemo} />
          <Route exact path="/legend" component={LegendDemo} />
          <Route exact path="/radio-input" component={RadioInputDemo} />
          <Route exact path="/stacked-card" component={StackedCardDemo} />
          <Route exact path="/switch" component={SwitchDemo} />
          <Route exact path="/snackbar" component={SnackBarDemo} />
          <Route exact path="/user-profile" component={UserProfileDemo} />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
