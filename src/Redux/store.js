import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
import darkModeReducer from "./darkModeReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  user: userReducer,
});

export default createStore(rootReducer);
