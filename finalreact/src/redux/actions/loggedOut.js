import * as types from './types';
import user from '../../data/user.json';

export function login(email, pass) {
  return (dispatch, getState) => {
    if (email === user.email) {
      dispatch(setLoggedInState(true));
      return true;
    }
    dispatch(setLoggedInState(false));
    return false;
  };
}

export function setLoggedInState(loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  };
}
