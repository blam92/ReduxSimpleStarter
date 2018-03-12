import { CHANGE_AUTH, FETCH_USERS, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3090';

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
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signUpUser({ email, password }, history) {
  console.log('EMAIL AND PASSWD ACTIONS', email, password);
  return (dispatch) => {
    axios.post(`${API_URL}/signup`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER })
        console.log('res', res);
        localStorage.setItem('JWT', res.data.token);
        history.push('/users');
      })
      .catch((err) => {
        console.log('error in response', err.response);
        dispatch(authError(err.response.data.err));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser() {
  localStorage.removeItem('JWT');
  return {
   type: UNAUTH_USER 
  }
}