import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    cursor: 'pointer',
    margin: '10px 10px'
  }


}

export default class Header extends Component {
  authButton() {
    return <button className="btn btn-primary">Sign In</button>
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav">
          <li className="nav-item">
            <Link style={styles.link} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={styles.link} to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link style={styles.link}to="/auth">{this.authButton()}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}