import { configureStore } from '@reduxjs/toolkit';
import reducepost from './postslice';
export const store = configureStore({
  reducer: {
    post: reducepost,
  },
});
