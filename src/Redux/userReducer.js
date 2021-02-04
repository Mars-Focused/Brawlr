/* NOTES TO HELP YOU CONNECT TO REDUX AND STUFFS!

1) use "import { loginUser } from "../../Redux/userReducer" at the top to bring this in

2) use what's shown below at the bottom of the file

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    darkMode: reduxState.darkMode.darkMode,
  };
}

export default connect(mapStateToProps, {})(Login);

--this will bring in the specific pieces of info the component needs--

3) use "props.loginUser(res.data)" to add to global state

*/

//INITIAL STATE
const initialState = {
  user: "No User",
  isLoggedIn: false,
};

//ACTION CONSTANTS
const LOGIN_USER = "LOGIN_USER";
const LOGOUT = "LOGOUT";

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
