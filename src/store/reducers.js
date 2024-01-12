import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";
import { flowersReducer } from "./flowers/reducer";
import { backdropReducer } from "./backdrop/reducer";
import { globalReducer } from "./global/reducer";
import { bucketReducer } from "./bucket/reducer";
import { wishlistReducer } from "./wishlist/reducer";

export const rootReducer = combineReducers({
  userReducer,
  flowersReducer,
  backdropReducer,
  globalReducer,
  bucketReducer,
  wishlistReducer,
});
