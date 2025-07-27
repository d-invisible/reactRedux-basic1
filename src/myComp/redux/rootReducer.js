import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    counter: countReducer,
    user: userReducer
});
export default rootReducer;
