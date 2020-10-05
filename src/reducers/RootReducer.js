import { combineReducers } from "redux";
import UserReducers from "./UserReducer";
import AuthReducer from "./AuthReducer";


const rootReducer = combineReducers({
  usersStore: UserReducers,
  auth: AuthReducer,

});

export default rootReducer;
