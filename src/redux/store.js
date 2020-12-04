import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import playlistSlice from './playlist/playlistSlice';
import loaderSlice from './loader/loaderSlice';

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    music: playlistSlice.reducer,
  },
  middleware: [thunk],
});
