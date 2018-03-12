import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../actions/index';

const styles = {
  link: {
    cursor: 'pointer',
    margin: '10px 10px'
  }


}

class Header extends Component {
  authButton() {
    const onClick = () => this.props.authenticate(!this.props.isAuthenticated);

    if (this.props.isAuthenticated) {
      return <button className="btn btn-primary" onClick={onClick}>Sign Out</button>
    }

    return <button className="btn btn-primary" onClick={onClick}>Sign In</button>
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav">
          <li className="nav-item">
            <Link style={styles.link} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={styles.link} to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link style={styles.link} to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link style={styles.link} to="/signin">Sign In</Link>
            {/* {this.authButton()} */}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (isLoggedIn) => {
      dispatch(authenticate(isLoggedIn));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);