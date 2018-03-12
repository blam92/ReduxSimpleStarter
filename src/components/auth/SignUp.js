import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signUpUser } from '../../actions/index';

let validate = ({email, password, passwordConfirm}) => {
  let errors = {};
  if(password !== passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  if(!email) {
    errors.email = 'Please enter an email';
  }

  if (!password) {
    errors.password = 'Please enter a password';
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please confirm password';
  }

  return errors;
}

class SignUp extends Component {

  handleFormSubmit({email, password}) {
    this.props.signUpUser({email, password}, this.props.history);
  }

  renderAlert() {
    return (
      this.props.errorMessage &&
      <div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
      </div>
    );
  }

  renderField({input, label, type, meta: { touched, error }}) {
    return (
      <div>
        <input {...input} type={type}/>
        {touched && error && <div style={{color: 'red'}}>{error}</div>}
      </div>
    );
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <div>
              <Field name="email" component={this.renderField.bind(this)} type="email" />
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <div>
              <Field name="password" component={this.renderField.bind(this)} type="password" />
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <div>
              <Field name="passwordConfirm" component={this.renderField.bind(this)} type="password" />
            </div>
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  }
}
export default reduxForm({
  form: 'signup',
  validate
})(connect(mapStateToProps, { signUpUser })(SignUp));