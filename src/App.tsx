import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {LeftNav} from "./components/Login/LeftNav";
import "./App.css";
import Store from './redux/store.provider'

class App extends Component<any, any> {
  render() {
    return (
      <Store>
      
        <Router>
          <Switch>
            <Route path="/" exact component={LeftNav} />
           
          </Switch>
        </Router>
      
      </Store>
    );
  }
}
export default App;