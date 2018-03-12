import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class SignIn extends Component {

  renderInput(field) {
    return (
      <div>
        <input {...field.input} type={field.type}/> 
        { field.meta.touched && field.meta.error && <span>{ field.meta.error }</span>}
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
          <Field name="email" component={this.renderInput.bind(this)} type="email"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component={this.renderInput.bind(this)} type="password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
})(connect(null, actions)(SignIn));