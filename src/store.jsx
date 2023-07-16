import { configureStore } from "@reduxjs/toolkit";
import earthquakeReducer from "./components/earthquakeReducer";

const store = configureStore({
  reducer: {
    earthquake: earthquakeReducer,
  },
});

export default store;
