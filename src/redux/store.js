import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from './categoriesApi';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});