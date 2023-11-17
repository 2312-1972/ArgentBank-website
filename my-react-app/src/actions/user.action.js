// user.action.js
import axios from "axios";

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const STORE_TOKEN = "STORE_TOKEN";

export const postUser = (userData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      if (res.data) {
        console.log("Connexion réussie");
        dispatch({ type: SIGN_IN_SUCCESS, payload: { user: res.data } });
        // Attendre que SIGN_IN_SUCCESS soit terminé avant de dispatch STORE_TOKEN
        dispatch({ type: STORE_TOKEN, payload: { token: res.data.body.token } });
        console.log("Token:", res.data.body.token);
      } else {
        dispatch({
          type: SIGN_IN_FAILURE,
          payload: { error: "Invalid response format" },
        });
      }
    } catch (error) {
      dispatch({ type: SIGN_IN_FAILURE, payload: { error: error.message } });
    }
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
      const { user } = getState();
      const token = user.token;

      const res = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Authorization Header:", `Bearer ${token}`);
      if (res.data) {
        dispatch({ type: GET_USER_SUCCESS, payload: { user: res.data.body } });
      } else {
        dispatch({
          type: GET_USER_FAILURE,
          payload: { error: "Invalid response format" },
        });
      }
    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, payload: { error: error.message } });
    }
  };
};
