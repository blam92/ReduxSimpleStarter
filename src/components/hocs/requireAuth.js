import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      console.log(this.props);
      if(this.props.authenticated) {
        return <ComposedComponent {...this.props} />
      }

      return (<Redirect to='/signin'/>);
    }
  }

  let mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}
