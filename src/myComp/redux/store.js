import { legacy_createStore } from "redux";
import countReducer from "./countReducer";
import rootReducer from "./rootReducer";

export const store = legacy_createStore(rootReducer);