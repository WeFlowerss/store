import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers.js"; // Create this file

const store = configureStore({
  reducer: rootReducer,
});

export default store;
