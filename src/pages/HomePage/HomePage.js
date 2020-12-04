import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TracksList from '../../components/TracksList/TracksList';
import { getPlaylist } from '../../redux/playlist/playlistOperations';
import styles from './HomePage.module.scss';
const HomePage = () => {
  const dispatch = useDispatch();

  const playlist = useSelector(state => state.music.playlist);
  //   console.log(playlist);

  useEffect(() => {
    dispatch(getPlaylist());
  }, [getPlaylist]);

  return (
    <div className={`container`}>
      <h1 className={styles.sectionTitle}>Top 50's songs</h1>
      {playlist.length > 0 && <TracksList tracksList={playlist} />}
    </div>
  );
};

export default HomePage;
