import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";
import { flowersReducer } from "./flowers/reducer";

export const rootReducer = combineReducers({
  userReducer,
  flowersReducer,
});
