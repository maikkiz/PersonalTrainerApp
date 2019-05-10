import React, { Component } from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TrainingsList from './components/TrainingsList';
import CustomerList from './components/CustomerList';
import Navigator from './components/Navigator';
import Calendar from './components/Calendar';
import headerpic from './equipment2.jpg';

class App extends Component {

  render() {
    return (
      <div className="App"> 
        <header>
          <div className="App-header">
            <img src={headerpic} alt="header" className="Picture"></img>
            <div className="overlay">
              <a className="linkcolor" href="https://www.pexels.com/photo/six-assorted-weight-plates-on-top-of-gray-surface-669577/">Photo by Lukas from Pexels</a>
            </div> 
          </div>
        </header>
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
