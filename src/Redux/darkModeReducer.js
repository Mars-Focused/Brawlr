//INITIAL STATE
const initialState = {
  darkMode: true,
};

//ACTION CONSTANTS
const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

//ACTION CREATORS
export function loginUser(user) {
  return {
    type: TOGGLE_DARK_MODE,
    payload: user,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !darkMode };

    default:
      return state;
  }
}
