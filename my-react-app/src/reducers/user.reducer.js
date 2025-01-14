// user.reducer.js

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  STORE_TOKEN,
  SIGN_OUT_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USERNAME_SUCCESS,
} from "../actions/user.action";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      const { token, ...userData } = action.payload.user;
      return {
        ...state,
        isAuthenticated: true,
        user: { ...userData },
        token: token,
        error: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload.error,
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case UPDATE_USERNAME_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.newUsername,
        },
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
