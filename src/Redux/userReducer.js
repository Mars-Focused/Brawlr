//INITIAL STATE
const initialState = {
  user: "No User",
  isLoggedIn: false,
  darkMode: true,
};

//ACTION CONSTANTS
const LOGIN_USER = "LOGIN_USER";
const LOGOUT = "LOGOUT";
const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

//ACTION CREATORS
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
