import { CHANGE_AUTH, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = { authenticated: false }, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
    case AUTH_USER:
      return {...state, authenticated: true }
    case UNAUTH_USER:
      return {...state, authenticated: false }
    case AUTH_ERROR:
      return {...state, error: action.payload }
    default:
      return state;
  }
}