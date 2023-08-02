import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player"; // Use default import

const store = configureStore({
     reducer: {
          player: playerReducer, // Use the default import
     },
});

export default store;
