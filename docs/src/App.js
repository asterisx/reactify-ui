import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AlertDemo from './pages/alert';
import BadgeDemo from './pages/badge';
import ButtonDemo from './pages/button';
import CardDemo from './pages/card';
import CheckBoxDemo from './pages/checkbox';
import FullScreenDemo from './pages/full-screen';
import GroupToggleDemo from './pages/group-toggle';
import HorizontalCardDemo from './pages/horizontal-card';
import LabelDemo from './pages/label';
import LegendDemo from './pages/legend';
import ListPanelDemo from './pages/list-panel';
import NumberCounterDemo from './pages/number-counter';
import PortalDemo from './pages/portal';
import PaperDemo from './pages/paper';
import RadioInputDemo from './pages/radio-input';
import RadioGroupDemo from './pages/radio-group';
import StackedCardDemo from './pages/stacked-card';
import StarRatingDemo from './pages/star-rating';
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
              <Link className="d-block" to="/group-toggle">
                Group Toggle
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
              <Link className="d-block" to="/list-panel">
                List Panel
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/number-counter">
                Number Counter
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/paper">
                Paper
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/portal">
                Portal
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/radio-input">
                Radio Input
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/radio-group">
                Radio Group
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/snackbar">
                SnackBar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/stacked-card">
                Stacked Card
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/star-rating">
                Star Rating
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/switch">
                Switch
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
          <Route exact path="/" component={AlertDemo} />
          <Route exact path="/alert" component={AlertDemo} />
          <Route exact path="/badge" component={BadgeDemo} />
          <Route exact path="/button" component={ButtonDemo} />
          <Route exact path="/card" component={CardDemo} />
          <Route exact path="/checkbox" component={CheckBoxDemo} />
          <Route exact path="/full-screen" component={FullScreenDemo} />
          <Route exact path="/group-toggle" component={GroupToggleDemo} />
          <Route exact path="/horizontal-card" component={HorizontalCardDemo} />
          <Route exact path="/label" component={LabelDemo} />
          <Route exact path="/legend" component={LegendDemo} />
          <Route exact path="/list-panel" component={ListPanelDemo} />
          <Route exact path="/number-counter" component={NumberCounterDemo} />
          <Route exact path="/paper" component={PaperDemo} />
          <Route exact path="/portal" component={PortalDemo} />
          <Route exact path="/radio-input" component={RadioInputDemo} />
          <Route exact path="/radio-group" component={RadioGroupDemo} />
          <Route exact path="/snackbar" component={SnackBarDemo} />
          <Route exact path="/stacked-card" component={StackedCardDemo} />
          <Route exact path="/star-rating" component={StarRatingDemo} />
          <Route exact path="/switch" component={SwitchDemo} />
          <Route exact path="/user-profile" component={UserProfileDemo} />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
