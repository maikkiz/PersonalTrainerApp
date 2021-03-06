import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'antd';

class Navigator extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Personal Trainer App
          </Link>
          <button
            onClick={this.toggleNavbar} className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className={`${classOne}`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/CustomerList">
                  Customers <Icon type="user" className="icon"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TrainingsList">
                  Trainings <Icon type="thunderbolt" className="icon"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calendar">
                  Calendar <Icon type="calendar" className="icon"/>
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