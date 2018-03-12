import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

let validate = ({email, password, passwordConfirm}) => {
  let errors = {};
  if(password !== passwordConfirm) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

class SignUp extends Component {

  handleFormSubmit() {

  }

  renderAlert() {

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
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <div>
              <Field name="email" component={this.renderField} type="email" />
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <div>
              <Field name="password" component={this.renderField} type="password" />
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <div>
              <Field name="passwordConfirm" component={this.renderField} type="password" />
            </div>
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'signup',
  validate
})(connect()(SignUp));