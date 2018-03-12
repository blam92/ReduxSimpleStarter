import { CHANGE_AUTH, AUTH_USER, UNAUTH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
    case AUTH_USER:
      return {...state, authenticated: true }
    case UNAUTH_USER:
      return {...state, authenticated: false }
    default:
      return state;
  }
}