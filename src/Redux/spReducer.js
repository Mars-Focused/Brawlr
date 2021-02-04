//INITIAL STATE
const initialState = {
  selectedSP: true,
};

//ACTION CONSTANTS
const SELECT_SP = "SELECT_SP";

//ACTION CREATORS
export function changeSelectedSP(sp) {
  return {
    type: SELECT_SP,
    payload: sp,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SP:
      return { ...state, selectedSP: action.payload };

    default:
      return state;
  }
}
