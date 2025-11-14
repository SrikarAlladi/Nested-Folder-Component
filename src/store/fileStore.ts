import { configureStore } from "@reduxjs/toolkit";

import fileSlice from "./fileSlice";

const fileStore = configureStore({
  reducer: {
    fileSlice: fileSlice.reducer,
  },
});

// ✅ 1. Export the RootState type (state shape)
export type RootState = ReturnType<typeof fileStore.getState>;

// ✅ 2. Export AppDispatch type (useful for typed dispatch)
export type AppDispatch = typeof fileStore.dispatch;

export default fileStore;
