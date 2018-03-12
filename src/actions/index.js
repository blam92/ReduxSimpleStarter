import { CHANGE_AUTH, FETCH_USERS, AUTH_USER } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3090';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function signInUser({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${API_URL}/signin`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER })
        console.log('res', res);
        localStorage.setItem('JWT', res.data.token);
        history.push('/users');
      })
      .catch((err) => {

      });
  }
}