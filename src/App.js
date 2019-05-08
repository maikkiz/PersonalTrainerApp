import React, { Component } from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TrainingsList from './components/TrainingsList';
import CustomerList from './components/CustomerList';
import Navigator from './components/Navigator';
import Calendar from './components/Calendar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator/>
            <Switch>
              <Route exact path="/" component={CustomerList}/>
              <Route path="/CustomerList" component={CustomerList}></Route>
              <Route path="/TrainingsList" component={TrainingsList}/>
              <Route path="/Calendar" component={Calendar}/>
            </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
