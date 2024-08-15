// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import portfolioReducer from './portfolioSlice';
import newsReducer from './newSlice';



export const store = configureStore({
  reducer: {
    blog: blogReducer,
    portfolio: portfolioReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
