import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: [],
  error: '',
};

export default createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setErrorNull: state => ({ ...state, error: '' }),

    getPlaylistSuccess: (state, { payload }) => ({
      ...state,
      playlist: payload,
    }),

    getPlaylistError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),
  },
});
