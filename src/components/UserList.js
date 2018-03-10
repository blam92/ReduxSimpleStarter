import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const styles = {
  cards: {
    margin: '15px 0',
    padding: '10px 10px'
  }
}

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user, idx) {
    return (
      <div key={idx} style={styles.cards} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary">Website</a>
      </div>
    )
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);