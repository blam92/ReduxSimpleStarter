import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class SignIn extends Component {

  renderAlert() {
      return (
      this.props.errorMessage && 
      <div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
      </div>
      );
  }

  handleFormSubmit({email, password}) {
    this.props.signInUser({ email, password }, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form action="" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <div>
            <Field name="email" component='input' type="email" />
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <div>
            <Field name="password" component='input' type="password"/>
          </div>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'signin',
})(connect(mapStateToProps, actions)(SignIn));