import React, { Component } from 'react';
import Header from './Header';
import Resources from './Resources';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/resources' component={Resources}/>
          <Route path='/users' component={UserList} />
        </Switch>
      </div>
    );
  }
}
