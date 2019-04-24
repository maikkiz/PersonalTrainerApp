import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom';
import TrainingsList from './components/TrainingsList';
import CustomerList from './components/CustomerList';
import Navigator from './components/Navigator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator/>
            <Switch>
              <Route exact path="/" component={CustomerList}/>
              <Route path="/TrainingsList" component={TrainingsList}/>
              <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
