import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import AlertDemo from './pages/alert';
import BadgeDemo from './pages/badge';
import {
  BallsDemo,
  BarsDemo,
  CircleDemo,
  ClockDemo,
  HydrogenDemo,
  LoadbarDemo,
  SphereDemo,
  SlicesDemo,
  TextureDemo,
  VolumeDemo,
  VortexDemo,
  WaveDemo,
} from './pages/spinner';
import ButtonDemo from './pages/button';
import CardDemo from './pages/card';
import ChipsDemo from './pages/chips';
import CheckBoxDemo from './pages/checkbox';
import DismissDemo from './pages/dismiss';
import DropdownDemo from './pages/dropdown';
import FullScreenDemo from './pages/full-screen';
import GroupToggleDemo from './pages/group-toggle';
import HorizontalCardDemo from './pages/horizontal-card';
import InputDemo from './pages/input';
import LabelDemo from './pages/label';
import LegendDemo from './pages/legend';
import LinkDemo from './pages/link';
import ListPanelDemo from './pages/list-panel';
import LoginDemo from './pages/login';
import ModalDemo from './pages/modal';
import NumberCounterDemo from './pages/number-counter';
import PaperDemo from './pages/paper';
import PortalDemo from './pages/portal';
import ProgressBarDemo from './pages/progress-bar';
import RadioInputDemo from './pages/radio-input';
import RadioGroupDemo from './pages/radio-group';
import SearchBarDemo from './pages/search-bar';
import SliderDemo from './pages/slider';
import StackedCardDemo from './pages/stacked-card';
import StarRatingDemo from './pages/star-rating';
import SwitchDemo from './pages/switch';
import SnackBarDemo from './pages/snackbar';
import TabsDemo from './pages/tabs';
import TextDemo from './pages/text';
import TimerDemo from './pages/timer';
import ToastDemo from './pages/toast';
import TooltipDemo from './pages/tooltip';
import TopBarDemo from './pages/top-bar';
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
              <Link className="d-block" to="/balls">
                Balls
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/bars">
                Bars
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
              <Link className="d-block" to="/chips">
                Chips
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/circle">
                Circle
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/clock">
                Clock
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/dismiss">
                Dismiss
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/dropdown">
                Dropdown
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
              <Link className="d-block" to="/hydrogen">
                Hydrogen
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/input">
                Input
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
              <Link className="d-block" to="/link">
                Link
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/list-panel">
                List Panel
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/loadbar">
                Loadbar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/login">
                Login
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/modal">
                Modal
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
              <Link className="d-block" to="/progress-bar">
                Progress Bar
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
              <Link className="d-block" to="/search-bar">
                Search Bar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/slices">
                Slices
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/slider">
                Slider
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/snackbar">
                SnackBar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/sphere">
                Sphere
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
              <Link className="d-block" to="/tabs">
                Tabs
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/text">
                Text
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/texture">
                Texture
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/timer">
                Timer
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/toast">
                Toast
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/tooltip">
                Tooltip
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/top-bar">
                Top Bar
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/user-profile">
                User Profile
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/volume">
                Volume
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/vortex">
                Vortex
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="d-block" to="/wave">
                Wave
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 overflow-scroll">
          <Route exact path="/reactify" component={AlertDemo} />
          <Route exact path="/alert" component={AlertDemo} />
          <Route exact path="/badge" component={BadgeDemo} />
          <Route exact path="/balls" component={BallsDemo} />
          <Route exact path="/bars" component={BarsDemo} />
          <Route exact path="/button" component={ButtonDemo} />
          <Route exact path="/card" component={CardDemo} />
          <Route exact path="/checkbox" component={CheckBoxDemo} />
          <Route exact path="/chips" component={ChipsDemo} />
          <Route exact path="/circle" component={CircleDemo} />
          <Route exact path="/clock" component={ClockDemo} />
          <Route exact path="/dismiss" component={DismissDemo} />
          <Route exact path="/dropdown" component={DropdownDemo} />
          <Route exact path="/full-screen" component={FullScreenDemo} />
          <Route exact path="/group-toggle" component={GroupToggleDemo} />
          <Route exact path="/horizontal-card" component={HorizontalCardDemo} />
          <Route exact path="/hydrogen" component={HydrogenDemo} />
          <Route exact path="/input" component={InputDemo} />
          <Route exact path="/label" component={LabelDemo} />
          <Route exact path="/legend" component={LegendDemo} />
          <Route exact path="/link" component={LinkDemo} />
          <Route exact path="/list-panel" component={ListPanelDemo} />
          <Route exact path="/loadbar" component={LoadbarDemo} />
          <Route exact path="/login" component={LoginDemo} />
          <Route exact path="/modal" component={ModalDemo} />
          <Route exact path="/number-counter" component={NumberCounterDemo} />
          <Route exact path="/paper" component={PaperDemo} />
          <Route exact path="/portal" component={PortalDemo} />
          <Route exact path="/progress-bar" component={ProgressBarDemo} />
          <Route exact path="/radio-input" component={RadioInputDemo} />
          <Route exact path="/radio-group" component={RadioGroupDemo} />
          <Route exact path="/search-bar" component={SearchBarDemo} />
          <Route exact path="/slices" component={SlicesDemo} />
          <Route exact path="/slider" component={SliderDemo} />
          <Route exact path="/snackbar" component={SnackBarDemo} />
          <Route exact path="/sphere" component={SphereDemo} />
          <Route exact path="/stacked-card" component={StackedCardDemo} />
          <Route exact path="/star-rating" component={StarRatingDemo} />
          <Route exact path="/switch" component={SwitchDemo} />
          <Route exact path="/tabs" component={TabsDemo} />
          <Route exact path="/text" component={TextDemo} />
          <Route exact path="/texture" component={TextureDemo} />
          <Route exact path="/timer" component={TimerDemo} />
          <Route exact path="/toast" component={ToastDemo} />
          <Route exact path="/tooltip" component={TooltipDemo} />
          <Route exact path="/top-bar" component={TopBarDemo} />
          <Route exact path="/user-profile" component={UserProfileDemo} />
          <Route exact path="/volume" component={VolumeDemo} />
          <Route exact path="/vortex" component={VortexDemo} />
          <Route exact path="/wave" component={WaveDemo} />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
