import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
import darkModeReducer from "./darkModeReducer";
import spReducer from "./spReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  user: userReducer,
  sp: spReducer,
});

export default createStore(rootReducer);
