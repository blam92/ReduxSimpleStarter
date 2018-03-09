import React, { Component } from 'react';
import Header from './Header';
import Resources from './Resources';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/resources' component={Resources}/>
        </Switch>
      </div>
    );
  }
}
