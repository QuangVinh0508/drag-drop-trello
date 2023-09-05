import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import appSlice from '../state/appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger())
})