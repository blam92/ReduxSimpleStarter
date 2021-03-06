import React, { Component } from 'react';
import Header from './Header';
import Resources from './Resources';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';
import Welcome from './Welcome';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/resources' component={Resources}/>
          <Route path='/users' component={UserList} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signout' component={SignOut} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}
