//INITIAL STATE
const initialState = {
  darkMode: true,
};

//ACTION CONSTANTS
const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

//ACTION CREATORS
export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}
