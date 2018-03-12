import React, { Component } from 'react';
import Header from './Header';
import Resources from './Resources';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import SignIn from './auth/SignIn';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/resources' component={Resources}/>
          <Route path='/users' component={UserList} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}
