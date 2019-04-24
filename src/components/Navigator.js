import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigator extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/">
            Personal Trainer
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TrainingsList">
                  Trainings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>
        </nav>
            </div>
        );
    }
}

export default Navigator;