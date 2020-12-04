import api from '../../services/api';
import playlistSlice from './playlistSlice';
import loaderSlice from '../loader/loaderSlice';

export const getPlaylist = () => dispatch => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  api
    .getPlaylist()
    .then(data => {
      dispatch(
        playlistSlice.actions.getPlaylistSuccess(data.data.tracks.track),
      );
      dispatch(playlistSlice.actions.setErrorNull());
    })
    .catch(error => dispatch(playlistSlice.actions.getPlaylistError(error)));
  dispatch(loaderSlice.actions.setLoadingFalse());
};
