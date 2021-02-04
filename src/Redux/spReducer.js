//INITIAL STATE
const initialState = {
  recSPArr: true,
};

//ACTION CONSTANTS
const REC_SP = "REC_SP";

//ACTION CREATORS
export function changeRecSPArr(sp) {
  return {
    type: REC_SP,
    payload: sp,
  };
}

//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REC_SP:
      return { ...state, recSPArr: action.payload };

    default:
      return state;
  }
}
