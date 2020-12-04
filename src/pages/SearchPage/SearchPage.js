import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TracksList from '../../components/TracksList/TracksList';
import { getPlaylist } from '../../redux/playlist/playlistOperations';
import styles from './SearchPage.module.scss';
const SearchPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [newPlaylist, setNewPlaylist] = useState([]);
  const playlist = useSelector(state => state.music.playlist);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setNewPlaylist(
      playlist.filter(res =>
        res.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    dispatch(getPlaylist());
  }, [getPlaylist]);

  return (
    <div>
      <div className={styles.searchWrapp}>
        <div className={`container`}>
          <div className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
              <input
                className={styles.searchInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search..."
                value={value}
                onChange={handleChange}
              />
              <button type="submit" className={styles.SearchFormButton}>
                <span className={styles.SearchFormButtonLabel}>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`container`}>
        {newPlaylist.length > 0 && <TracksList tracksList={newPlaylist} />}
      </div>
    </div>
  );
};

export default SearchPage;
