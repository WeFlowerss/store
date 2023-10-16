import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";
import { flowersReducer } from "./flowers/reducer";
import { backdropReducer } from "./backdrop/reducer";

export const rootReducer = combineReducers({
  userReducer,
  flowersReducer,
  backdropReducer,
});
