import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import AccordionDemo from './pages/accordion';
import { componentsRouting } from './routes/components';

const App = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="card text-white bg-dark mb-3 col-2">
          <h3 className="card-header">Components</h3>
          <ul className="card-body">
            {Object.values(componentsRouting).map(route => (
              <li className="list-group-item" key={route.name}>
                <Link className="d-block" to={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-10 overflow-scroll">
          <Route exact path="/reactify-ui" component={AccordionDemo} />
          {Object.values(componentsRouting).map(route => (
            <Route exact path={route.path} component={route.component} key={route.name} />
          ))}
        </div>
      </div>
    </div>
  </Router>
);

export default App;
